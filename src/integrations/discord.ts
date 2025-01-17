import { SlashCommandBuilder } from '@discordjs/builders';
import { DiscordLink } from '@entity/discord';
import { Events } from '@entity/event';
import { Permissions as PermissionsEntity } from '@entity/permissions';
import { User, UserInterface } from '@entity/user';
import { HOUR, MINUTE } from '@sogebot/ui-helpers/constants';
import { dayjs, timezone } from '@sogebot/ui-helpers/dayjsHelper';
import chalk from 'chalk';
import * as DiscordJs from 'discord.js';
import { get } from 'lodash';
import { IsNull, LessThan, Not } from 'typeorm';
import { v5 as uuidv5 } from 'uuid';

import Integration from './_interface';

import { AppDataSource } from '~/database';
import {
  command, persistent, settings,
} from '~/decorators';
import {
  onChange, onStartup, onStreamEnd, onStreamStart,
} from '~/decorators/on';
import events from '~/events';
import Expects from '~/expects';
import { isStreamOnline, stats } from '~/helpers/api';
import { attributesReplace } from '~/helpers/attributesReplace';
import { announceTypes, getOwner, getUserSender, isUUID, prepare } from '~/helpers/commons';
import { isBotStarted, isDbConnected } from '~/helpers/database';
import { debounce } from '~/helpers/debounce';
import { eventEmitter } from '~/helpers/events';
import { chatIn, chatOut, debug, error, info, warning, whisperOut } from '~/helpers/log';
import { check } from '~/helpers/permissions/check';
import { get as getPermission } from '~/helpers/permissions/get';
import { adminEndpoint } from '~/helpers/socket';
import { tmiEmitter } from '~/helpers/tmi';
import { isModerator } from '~/helpers/user';
import * as changelog from '~/helpers/user/changelog.js';
import { Message } from '~/message';
import Parser from '~/parser';
import { getIdFromTwitch } from '~/services/twitch/calls/getIdFromTwitch';
import users from '~/users';
import { variables } from '~/watchers';

class Discord extends Integration {
  client: DiscordJs.Client | null = null;

  @persistent()
    embedStartedAt = '';
  @persistent()
    embedMessageId = '';

  @settings('general')
    clientId = '';

  @settings('general')
    token = '';

  @settings('bot')
    guild = '';

  @settings('bot')
    listenAtChannels: string | string[] = '';

  @settings('bot')
    sendOnlineAnnounceToChannel = '';

  @settings('bot')
    onlineAnnounceMessage = '';

  @settings('bot')
    sendAnnouncesToChannel: { [key in typeof announceTypes[number]]: string } = {
      bets:      '',
      duel:      '',
      general:   '',
      heist:     '',
      polls:     '',
      raffles:   '',
      scrim:     '',
      songs:     '',
      timers:    '',
      moderator: '',
    };

  @settings('bot')
    fields: string[] = ['$game', '$title', '$tags', '$startedAt', '$viewers', '$followers', '$subscribers'];

  @settings('bot')
    fieldsDisabled: string[] = [''];

  @settings('bot')
    ignorelist: string[] = [];

  @settings('status')
    onlinePresenceStatusDefault: 'online' | 'idle' | 'invisible' | 'dnd' = 'online';

  @settings('status')
    onlinePresenceStatusDefaultName = '';

  @settings('status')
    onlinePresenceStatusOnStream: 'streaming' | 'online' | 'idle' | 'invisible' | 'dnd' = 'online';

  @settings('status')
    onlinePresenceStatusOnStreamName = '$title';

  @settings('mapping')
    rolesMapping: { [permissionId: string]: string } = {};

  @settings('bot')
    deleteMessagesAfterWhile = false;

  generateEmbed(isOnline: boolean) {
    const broadcasterUsername = variables.get('services.twitch.broadcasterUsername') as string;
    const profileImageUrl = variables.get('services.twitch.profileImageUrl') as string;

    const color = isOnline ? 0x00ff00 : 0xff0000;
    const description = isOnline
      ? `${broadcasterUsername.charAt(0).toUpperCase() + broadcasterUsername.slice(1)} started stream! Check it out!`
      : `${broadcasterUsername.charAt(0).toUpperCase() + broadcasterUsername.slice(1)} is not streaming anymore! Check it next time!`;

    return new DiscordJs.EmbedBuilder()
      .setURL('https://twitch.tv/' + broadcasterUsername)
      .addFields(
        this.fields
          .filter((o) => this.filterFields(o, isOnline))
          .map((o) => this.prepareFields(o, isOnline)))
    // Set the title of the field
      .setTitle('https://twitch.tv/' + broadcasterUsername)
    // Set the color of the embed
      .setColor(color)
    // Set the main content of the embed
      .setDescription(description)
      .setImage(isOnline ? `https://static-cdn.jtvnw.net/previews-ttv/live_user_${broadcasterUsername}-1920x1080.jpg?${Date.now()}`: null)
      .setThumbnail(isOnline ? profileImageUrl : null)
      .setFooter({ text: prepare('integrations.discord.announced-by') + ' - https://www.sogebot.xyz' });
  }

  @onStartup()
  onStartup() {
    this.addEvent();

    // embed updater
    setInterval(async () => {
      if (isStreamOnline.value && this.client && this.embedMessageId.length > 0) {
        this.changeClientOnlinePresence();
        const channel = this.client.guilds.cache.get(this.guild)?.channels.cache.get(this.sendOnlineAnnounceToChannel);
        if (channel) {
          const message = await (channel as DiscordJs.TextChannel).messages.fetch(this.embedMessageId);

          debug('discord.embed', `Trying to update message ${this.embedMessageId}.`);
          if (message) {
            debug('discord.embed', `Updating message ${this.embedMessageId}.`);
            message.edit({ embeds: [this.generateEmbed(true)] })
              .then(() => debug('discord.embed', `Message ${this.embedMessageId} was updated.`))
              .catch((e) => debug('discord.embed', e));
          } else {
            debug('discord.embed', `Error during update of ${this.embedMessageId}. Message not found. ${JSON.stringify({ message })}`);
          }
        }
      }
    }, MINUTE * 10);

    setInterval(() => this.updateRolesOfLinkedUsers(), HOUR);
  }

  async updateRolesOfLinkedUsers() {
    if (!isDbConnected || !this.client) {
      return;
    }

    // go through mappings and delete zombies
    for (const mapped of Object.keys(this.rolesMapping)) {
      const doesPermissionExist = typeof (await getPermission(mapped)) !== 'undefined';
      if (!doesPermissionExist || this.rolesMapping[mapped] === '') {
        // delete permission if doesn't exist anymore
        delete this.rolesMapping[mapped];
        continue;
      }
    }

    const linkedUsers = await AppDataSource.getRepository(DiscordLink).find();
    for (const user of linkedUsers) {
      if (!user.userId) {
        continue;
      }
      const guild = this.client.guilds.cache.get(this.guild);
      if (!guild) {
        return warning('No servers found for discord');
      }

      let discordUser: DiscordJs.GuildMember;
      try {
        discordUser = await guild.members.fetch(user.discordId);
      } catch (e) {
        await AppDataSource.getRepository(DiscordLink).delete({ userId: user.userId });
        warning(`Discord user ${user.tag}@${user.discordId} not found - removed from link table`);
        continue;
      }

      const botPermissionsSortedByPriority = await PermissionsEntity.find({
        order: { order: 'ASC' },
      });

      const alreadyAssignedRoles: string[] = [];
      for (const botPermission of botPermissionsSortedByPriority) {
        if (!this.rolesMapping[botPermission.id]) {
          debug('discord.roles', `Permission ${botPermission.name}#${botPermission.id} is not mapped.`);
          // we don't have mapping set for this permission
          continue;
        }

        // role was already assigned by higher permission (we don't want to remove it)
        // e.g. Ee have same role for Subscriber and VIP
        //      User is subscriber but not VIP -> should have role
        if (alreadyAssignedRoles.includes(this.rolesMapping[botPermission.id])) {
          debug('discord.roles', `Role ${this.rolesMapping[botPermission.id]} is already mapped for user ${user.userId}`);
          continue;
        }

        const haveUserAnAccess = (await check(user.userId, botPermission.id, true)).access;
        const role = await guild.roles.fetch(this.rolesMapping[botPermission.id]);
        if (!role) {
          warning(`Role with ID ${this.rolesMapping[botPermission.id]} not found on your Discord Server`);
          continue;
        }
        debug('discord.roles', `User ${user.userId} - permission ${botPermission.id} - role ${role.name} - ${haveUserAnAccess}`);

        if (haveUserAnAccess) {
          // add role to user
          alreadyAssignedRoles.push(role.id);
          if (discordUser.roles.cache.has(role.id)) {
            debug('discord.roles', `User ${user.userId} already have role ${role.name}`);
          } else {
            discordUser.roles.add(role).catch(roleError => {
              warning(`Cannot add role '${role.name}' to user ${user.userId}, check permission for bot (bot cannot set role above his own)`);
              warning(roleError);
              debug('discord.roles', JSON.stringify(discordUser.roles.cache.values()));
            }).then(member => {
              debug('discord.roles', `User ${user.userId} have new role ${role.name}`);
            });
          }
        } else {
          // remove role from user
          if (!discordUser.roles.cache.has(role.id)) {
            debug('discord.roles', `User ${user.userId} already doesn't have role ${role.name}`);
          } else {
            discordUser.roles.remove(role).catch(roleError => {
              warning('Cannot remove role to user, check permission for bot (bot cannot set role above his own)');
              warning(roleError);
              debug('discord.roles', JSON.stringify(discordUser.roles.cache.values()));
            }).then(member => {
              debug('discord.roles', `User ${user.userId} have removed role ${role.name}`);
            });
          }
        }
      }
    }
  }

  @onStartup()
  @onChange('enabled')
  @onChange('token')
  async onStateChange(key: string, value: boolean) {
    if (await debounce(uuidv5('onStateChange', this.uuid), 1000)) {
      if (this.enabled && this.token.length > 0) {
        this.initClient();
        if (this.client) {
          this.client.login(this.token).catch((reason) => {
            error(chalk.bgRedBright('DISCORD') + ': ' + reason);
          });
        }
      } else {
        if (this.client) {
          this.client.destroy();
        }
      }
    }
  }

  async removeExpiredLinks() {
    // remove expired links
    await AppDataSource.getRepository(DiscordLink).delete({ userId: IsNull(), createdAt: LessThan(Date.now() - (MINUTE * 10)) });
  }

  @command('!unlink')
  async unlinkAccounts(opts: CommandOptions) {
    this.removeExpiredLinks();
    await AppDataSource.getRepository(DiscordLink).delete({ userId: opts.sender.userId });
    return [{ response: prepare('integrations.discord.all-your-links-were-deleted-with-sender', { sender: opts.sender }), ...opts }];
  }

  @command('!link')
  async linkAccounts(opts: CommandOptions) {
    enum errors { NOT_UUID }
    this.removeExpiredLinks();

    try {
      const [ uuid ] = new Expects(opts.parameters).everything({ name: 'uuid' }).toArray();
      if (!isUUID(uuid)) {
        throw new Error(String(errors.NOT_UUID));
      }

      const link = await AppDataSource.getRepository(DiscordLink).findOneByOrFail({ id: uuid, userId: IsNull() });
      // link user
      await AppDataSource.getRepository(DiscordLink).save({ ...link, userId: opts.sender.userId });
      return [{ response: prepare('integrations.discord.this-account-was-linked-with', { sender: opts.sender, discordTag: link.tag }), ...opts }];
    } catch (e: any) {
      if (e.message.includes('Expected parameter')) {
        return [
          { response: prepare('integrations.discord.help-message', { sender: opts.sender, command: this.getCommand('!link') }), ...opts },
        ];
      } else {
        if (e.message !== String(errors.NOT_UUID)) {
          warning(e.stack);
        }
        return [{ response: prepare('integrations.discord.invalid-or-expired-token', { sender: opts.sender }), ...opts }];
      }
    }
  }

  @onStreamEnd()
  async updateStreamStartAnnounce() {
    this.changeClientOnlinePresence();
    const channel = this.client?.guilds.cache.get(this.guild)?.channels.cache.get(this.sendOnlineAnnounceToChannel);
    if (channel && this.embedMessageId !== '') {
      try {
        const message = await (channel as DiscordJs.TextChannel).messages.fetch(this.embedMessageId);

        debug('discord.embed', `Trying to update message ${this.embedMessageId}.`);
        if (message) {
          debug('discord.embed', `Updating message ${this.embedMessageId}.`);
          message.edit({ embeds: [this.generateEmbed(false)] })
            .then(() => debug('discord.embed', `Message ${this.embedMessageId} was updated.`))
            .catch((e) => debug('discord.embed', e));
        } else {
          debug('discord.embed', `Error during update of ${this.embedMessageId}. Message not found. ${JSON.stringify({ message })}`);
        }
      } catch (e: any) {
        warning(`Discord embed couldn't be changed to offline - ${e.message}`);
      }
    }
    this.embedMessageId = '';
  }

  extractUsernameAndReasonFromMsg(opts: any) {
    const [username] = new Expects(opts.parameters).username({ prefix: 'username:\\s*', optional: false }).toArray();
    const [reason] = new Expects(opts.parameters).reason({ prefix: 'reason:\\s*', optional: true }).toArray();

    return { username, reason };
  }

  async banUser(username: string, author: DiscordJs.User, user: Readonly<Required<UserInterface>>, reason?: string, attachment?: string | DiscordJs.Attachment) {
    try {
      tmiEmitter.emit('ban', username);
      eventEmitter.emit('ban', {
        userName: username,
        reason:   reason || '<no reason>',
      });

      this.announceBan(author, username, user, reason, attachment);
    } catch (e) {
      chatOut(`#DISCORD: Error on ban [${username}]`);
    }
  }

  async announceBan(author: DiscordJs.User, username: string, user: Readonly<Required<UserInterface>>, reason?: string, attachment?: string | DiscordJs.Attachment) {
    const embedBody: DiscordJs.EmbedData = {
      color:       author.accentColor || DiscordJs.Colors.DarkRed,
      description: `${user.userName} baniu um usuário na live`,
      title:       'Usuário banido na live',
      fields:      [{ name: 'Nome de usuário', value: username }, { name: 'Motivo', value: reason || '' }],
      footer:      {
        text: 'Esse já era ou alguém é contra?',
      },
      author: {
        name:    author.tag,
        iconURL: author.avatarURL() || '',
      },
      timestamp: new Date(),
    };

    if (typeof attachment === 'string') {
      embedBody.thumbnail = { url: attachment };
    } else if (typeof attachment !== 'string' && attachment) {
      embedBody.thumbnail = { url: attachment.url, proxyURL: attachment.proxyURL, height: attachment.height ?? 0, width: attachment.width ?? 0 };
    }

    const embed = new DiscordJs.EmbedBuilder(embedBody);

    const channel = this.client?.guilds.cache.get(this.guild)?.channels.cache.get(this.sendAnnouncesToChannel.moderator);

    await (channel as DiscordJs.TextChannel).send({ embeds: [embed] });
    chatOut(`#${(channel as DiscordJs.TextChannel).name}: [[user banned on live]] [${username}]`);
  }

  async timeoutUser(username: string, seconds: number, author: DiscordJs.User, user: Readonly<Required<UserInterface>>, reason?: string, attachment?: string | DiscordJs.Attachment) {
    try {
      tmiEmitter.emit('timeout', username, seconds, { mod: isModerator(user) });
      eventEmitter.emit('timeout', { userName: username, duration: seconds });

      await this.announceTimeout(author, username, user, seconds, reason, attachment);
    } catch (e) {
      chatOut(`#DISCORD: Error on apply timeout to [${username}]`);
    }
  }

  async announceTimeout(author: DiscordJs.User, username: string, user: Readonly<Required<UserInterface>>, duration: number, reason?: string, attachment?: string | DiscordJs.Attachment) {
    const embedBody: DiscordJs.EmbedData = {
      color:       author.accentColor || DiscordJs.Colors.DarkOrange,
      description: `${user.userName} deu um timeout de ${duration} segundos em um usuário na live`,
      title:       'Usuário "timeoutado" na live',
      fields:      [{ name: 'Nome de usuário', value: username }, { name: 'Tempo', value: String(duration) }, { name: 'Motivo', value: reason || '' }],
      footer:      {
        text: 'Daqui a pouco ele volta, né?!',
      },
      author: {
        name:    author.tag,
        iconURL: author.avatarURL() || '',
      },
      timestamp: new Date(),
    };

    if (typeof attachment === 'string') {
      embedBody.thumbnail = { url: attachment };
    } else if (typeof attachment !== 'string' && attachment) {
      embedBody.thumbnail = { url: attachment.url, proxyURL: attachment.proxyURL, height: attachment.height ?? 0, width: attachment.width ?? 0 };
    }

    const embed = new DiscordJs.EmbedBuilder(embedBody);

    const channel = this.client?.guilds.cache.get(this.guild)?.channels.cache.get(this.sendAnnouncesToChannel.moderator);

    await (channel as DiscordJs.TextChannel).send({ embeds: [embed] });
    chatOut(`#${(channel as DiscordJs.TextChannel).name}: [[user timed out on live]] [${username}]`);
  }

  filterFields(o: string, isOnline: boolean) {
    const broadcasterType = variables.get('services.twitch.broadcasterType') as string;

    if (this.fieldsDisabled.includes(o)) {
      return false;
    }

    if (!isOnline) {
      if (['$viewers', '$followers', '$subscribers'].includes(o)) {
        return false;
      }
    }

    if (o === '$subscribers' && broadcasterType !== '') {
      return false;
    }

    if (o === '$tags' && (stats.value.currentTags ?? []).length === 0) {
      // don't show empty tags
      return false;
    }
    return true;
  }

  prepareFields(o: string, isOnline: boolean) {
    if (o === '$game') {
      return { name: prepare('webpanel.responses.variable.game'), value: stats.value.currentGame ?? '' };
    }
    if (o === '$title') {
      return { name: prepare('webpanel.responses.variable.title'), value: stats.value.currentTitle ?? '' };
    }
    if (o === '$tags') {
      return { name: prepare('webpanel.responses.variable.tags'), value: `${(stats.value.currentTags ?? []).map(tag => `${tag}`).join(', ')}` ?? '' };
    }
    if (o === '$startedAt') {
      if (isOnline) {
        return { name: prepare('integrations.discord.started-at'), value: this.embedStartedAt, inline: true };
      } else {
        return { name: prepare('integrations.discord.streamed-at'), value: `${this.embedStartedAt} - ${dayjs().tz(timezone).format('LLL')}`, inline: true };
      }
    }
    if (o === '$viewers') {
      return { name: prepare('webpanel.viewers'), value: String(stats.value.currentViewers), inline: true };
    }
    if (o === '$followers') {
      return { name: prepare('webpanel.followers'), value: String(stats.value.currentFollowers), inline: true };
    }
    if (o === '$subscribers') {
      return { name: prepare('webpanel.subscribers'), value: String(stats.value.currentSubscribers), inline: true };
    }
    return { name: o, value: 'unknown field' };
  }

  @onStreamStart()
  async sendStreamStartAnnounce() {
    this.changeClientOnlinePresence();
    try {
      if (this.client && this.sendOnlineAnnounceToChannel.length > 0 && this.guild.length > 0) {
        const channel = this.client.guilds.cache.get(this.guild)?.channels.cache.get(this.sendOnlineAnnounceToChannel);
        if (!channel) {
          throw new Error(`Channel ${this.sendOnlineAnnounceToChannel} not found on your discord server`);
        }
        this.embedStartedAt = dayjs().tz(timezone).format('LLL');
        // Send the embed to the same channel as the message
        const message = await (channel as DiscordJs.TextChannel).send({
          content: this.onlineAnnounceMessage.length > 0 ? this.onlineAnnounceMessage : undefined,
          embeds:  [this.generateEmbed(true)],
        });
        this.embedMessageId = message.id;
        chatOut(`#${(channel as DiscordJs.TextChannel).name}: [[online announce embed]] [${this.client.user?.tag}]`);
      }
    } catch (e: any) {
      warning(e.stack);
    }
  }

  @onChange('onlinePresenceStatusOnStreamName')
  @onChange('onlinePresenceStatusDefaultName')
  @onChange('onlinePresenceStatusOnStream')
  @onChange('onlinePresenceStatusDefault')
  async changeClientOnlinePresence() {
    if (!isBotStarted) {
      setTimeout(() => {
        this.changeClientOnlinePresence();
      }, 1000);
      return;
    }
    try {
      const broadcasterUsername = variables.get('services.twitch.broadcasterUsername') as string;
      if (isStreamOnline.value) {
        const activityString = await new Message(this.onlinePresenceStatusOnStreamName).parse();
        if (this.onlinePresenceStatusOnStream === 'streaming') {
          this.client?.user?.setStatus('online');
          this.client?.user?.setPresence({
            status:     'online',
            activities: [{
              name: activityString, type: DiscordJs.ActivityType.Streaming, url: `https://twitch.tv/${broadcasterUsername}`,
            }],
          });
        } else {
          this.client?.user?.setStatus(this.onlinePresenceStatusOnStream);
          if (activityString !== '') {
            this.client?.user?.setActivity('');
          } else {
            this.client?.user?.setPresence({ status: this.onlinePresenceStatusOnStream, activities: [{ name: activityString }] });
          }
        }
      } else {
        const activityString = await new Message(this.onlinePresenceStatusDefaultName).parse();
        if (activityString !== ''){
          this.client?.user?.setStatus(this.onlinePresenceStatusDefault);
          this.client?.user?.setPresence({ status: this.onlinePresenceStatusDefault, activities: [{ name: activityString }] });
        } else {
          this.client?.user?.setActivity('');
          this.client?.user?.setStatus(this.onlinePresenceStatusDefault);
        }
      }
    } catch (e: any) {
      warning(e.stack);
    }
  }

  public addEvent(){
    if (typeof events === 'undefined') {
      setTimeout(() => this.addEvent(), 1000);
    } else {
      events.supportedOperationsList.push(
        {
          id: 'send-discord-message', definitions: { channel: '', messageToSend: '' }, fire: this.fireSendDiscordMessage,
        },
      );
    }
  }

  /* note: as we are using event, we need to use self as pointer to discord class */
  public async fireSendDiscordMessage(operation: Events.OperationDefinitions, attributes: Events.Attributes): Promise<void> {
    const dMchannel = String(operation.channel);
    try {
      if (self.client === null) {
        throw new Error('Discord integration is not connected');
      }
      const userName = attributes.username === null || typeof attributes.username === 'undefined' ? getOwner() : attributes.username;
      await changelog.flush();
      const userObj = await AppDataSource.getRepository(User).findOneBy({ userName });
      if (!attributes.test) {
        if (!userObj) {
          changelog.update(await getIdFromTwitch(userName), { userName });
          return self.fireSendDiscordMessage(operation, { ...attributes, userName });
        }
      }

      const message = attributesReplace(attributes, String(operation.messageToSend));
      const messageContent = await self.replaceLinkedUsernameInMessage(await new Message(message).parse());
      const channel = self.client.guilds.cache.get(self.guild)?.channels.cache.get(dMchannel);
      await (channel as DiscordJs.TextChannel).send(messageContent);
      chatOut(`#${(channel as DiscordJs.TextChannel).name}: ${messageContent} [${self.client.user?.tag}]`);
    } catch (e: any) {
      warning(e.stack);
    }
  }

  async replaceLinkedUsernameInMessage(message: string) {
    // search linked users and change to @<id>
    let match;
    const usernameRegexp = /@(?<username>[A-Za-z0-9_]{3,15})\b/g;
    while ((match = usernameRegexp.exec(message)) !== null) {
      if (match) {
        const username = match.groups?.username as string;
        const userId = await users.getIdByName(username);
        const link = await AppDataSource.getRepository(DiscordLink).findOneBy({ userId });
        if (link) {
          message = message.replace(`@${username}`, `<@${link.discordId}>`);
        }
      }
    }
    return message;
  }

  initClient() {
    if (!this.client) {
      this.client = new DiscordJs.Client({
        intents: [
          DiscordJs.GatewayIntentBits.GuildMessages,
          DiscordJs.GatewayIntentBits.Guilds,
          DiscordJs.GatewayIntentBits.MessageContent,
          DiscordJs.GatewayIntentBits.DirectMessages,
        ],
        partials: [
          DiscordJs.Partials.Reaction,
          DiscordJs.Partials.Message,
          DiscordJs.Partials.Channel,
        ],
      });
      this.client.on('ready', () => {
        if (this.client) {
          info(
            chalk.yellow('DISCORD: ')
              + `Logged in as ${get(this.client, 'user.tag', 'unknown')}!`
          );
          this.changeClientOnlinePresence();
          this.updateRolesOfLinkedUsers();
          const guild = this.client.guilds.cache.get(this.guild);

          let commands;

          if (guild) {
            commands = guild.commands;
          } else {
            commands = this.client.application?.commands;
          }

          const modalCommand = new SlashCommandBuilder().setName('ban-or-timeout').setDescription('Banir ou Suspender usuário com prova do crime (print do motivo)')
            .addAttachmentOption(option => option.setName('proof').setDescription('Prova do crime (print do motivo) (opcional)').setRequired(false))
            .setDefaultMemberPermissions(DiscordJs.PermissionsBitField.Flags.BanMembers | DiscordJs.PermissionsBitField.Flags.KickMembers | DiscordJs.PermissionsBitField.Flags.MuteMembers);

          commands?.create({ name: 'ping', description: 'Respond with pong' });
          commands?.create(modalCommand.toJSON()).then(() => info(chalk.yellow('DISCORD: ') + 'modal ban-or-timeout slash command created'));
        }
      });
      this.client.on('error', (err) => {
        error(`DISCORD: ${err.stack || err.message}`);
      });

      this.client.on('interactionCreate', async (interaction) => {
        if (interaction.isButton()) {
          if (['ban-confirm', 'timeout-confirm'].includes(interaction.customId)) {
            const username = new DiscordJs.TextInputBuilder()
              .setCustomId('username-input')
              .setLabel('Nome do usuário na twitch')
              .setStyle(DiscordJs.TextInputStyle.Short)
              .setPlaceholder('Nome do usuário sem "@"')
              .setRequired(true);

            const reason = new DiscordJs.TextInputBuilder()
              .setCustomId('reason-input')
              .setStyle(DiscordJs.TextInputStyle.Paragraph)
              .setRequired(true);

            const inputFileUrl = new DiscordJs.TextInputBuilder()
              .setCustomId('proof-image-input')
              .setLabel('Url da imagem de prova do malandro')
              .setStyle(DiscordJs.TextInputStyle.Short)
              .setValue(interaction.message.embeds[0].image?.url ?? '')
              .setPlaceholder('Não precisa se não quiser');

            const modal = new DiscordJs.ModalBuilder();

            if (interaction.customId === 'ban-confirm') {
              reason
                .setLabel('Motivo do banimento')
                .setPlaceholder('Eu quero banir o malandro porque ele estava fazendo tal coisa');
              modal
                .setCustomId('ban-modal')
                .setTitle('Informe os dados para o banimento');
            }

            if (interaction.customId === 'timeout-confirm') {
              reason
                .setLabel('Motivo da suspensão')
                .setPlaceholder('Ex: Eu quero suspender o malandro porque ele estava fazendo tal coisa');
              modal
                .setCustomId('timeout-modal')
                .setTitle('Informe os dados para a suspensão');
            }

            const rows = [username, reason, inputFileUrl].map(
              (component) => new DiscordJs.ActionRowBuilder<DiscordJs.TextInputBuilder>()
                .addComponents(component)
            );

            modal.addComponents(...rows);

            await interaction.showModal(modal);
          } else if (interaction.customId === 'ban-cancel') {
            info('[[ cancellation of ban action ]]');
            await interaction.deferReply({ ephemeral: true });
            await interaction.editReply({ content: 'É cabaço mesmo né?!' });
          }
        }

        if (interaction.isModalSubmit()) {
          const username = interaction.fields.getTextInputValue('username-input');
          const reason = interaction.fields.getTextInputValue('reason-input');
          const proofUrl = interaction.fields.getTextInputValue('proof-image-input');

          if (!username) {
            return;
          }

          if (['ban-modal', 'timeout-modal'].includes(interaction.customId)) {
            try {
              await interaction.deferReply({
                ephemeral: true,
              });

              const link = await AppDataSource.getRepository(DiscordLink).findOneByOrFail({
                discordId: interaction.user.id,
                userId:    Not(IsNull()),
              });

              if (!link.userId) {
                return;
              }

              const user = await changelog.getOrFail(link.userId);

              if (!isModerator(user)) {
                interaction.editReply({
                  content: prepare('permissions.without-permission', {
                    command: '/ban-or-timeout',
                  }),
                });
              }

              if (interaction.customId === 'ban-modal') {
                await this.banUser(
                  username,
                  interaction.user,
                  user,
                  reason || undefined,
                  proofUrl || undefined
                );

                interaction.editReply({
                  content: 'Recebemos o seu pedido e ele já foi processado, se deu certo poderás vê-lo no canal de banimentos e timeouts!',
                });
              } else if (interaction.customId === 'timeout-modal'){
                const time = new DiscordJs.StringSelectMenuBuilder()
                  .setCustomId('time-input')
                  .setPlaceholder('Duração da suspensão (segundos)')
                  .setMaxValues(1)
                  .addOptions({
                    label:       '15s',
                    description: 'Suspender usuário por 15s',
                    value:       String(15),
                    default:     true,
                  }, {
                    label:       '30s',
                    description: 'Suspender usuário por 30s',
                    value:       String(30),
                  }, {
                    label:       '1 min',
                    description: 'Suspender usuário por 1 min',
                    value:       String(60),
                  }, {
                    label:       '5 min',
                    description: 'Suspender usuário por 5 min',
                    value:       String(60 * 5),
                  }, {
                    label:       '10 min',
                    description: 'Suspender usuário por 10 min',
                    value:       String(60 * 10),
                  }, {
                    label:       '15 min',
                    description: 'Suspender usuário por 15 min',
                    value:       String(60 * 15),
                  }, {
                    label:       '30 min',
                    description: 'Suspender usuário por 30 min',
                    value:       String(60 * 30),
                  }, {
                    label:       '1 hour',
                    description: 'Suspender usuário por 1 hour',
                    value:       String(60 * 60),
                  }, {
                    label:       '12 hours',
                    description: 'Suspender usuário por 12 hours',
                    value:       String(60 * 60 * 12),
                  }, {
                    label:       '1 Day',
                    description: 'Suspender usuário por 1 Day',
                    value:       String(60 * 60 * 24),
                  });

                const confirmTimeoutButton = new DiscordJs.ButtonBuilder()
                  .setCustomId('timeout-modal-confirm')
                  .setStyle(DiscordJs.ButtonStyle.Success);

                const rowTime = new DiscordJs.ActionRowBuilder<DiscordJs.StringSelectMenuBuilder>().addComponents(time);
                const rowTimeoutButton = new DiscordJs.ActionRowBuilder<DiscordJs.ButtonBuilder>().addComponents(confirmTimeoutButton);

                let timeoutDuration = '15';
                const message = await interaction.fetchReply();
                const selectCollector = message.createMessageComponentCollector({ componentType: DiscordJs.ComponentType.StringSelect });
                const buttonCollector = message.createMessageComponentCollector({ componentType: DiscordJs.ComponentType.Button, max: 1 });

                interaction.editReply({
                  content:    'Selecione por quanto tempo deseja suspender o usuário.',
                  components: [rowTime],
                });

                selectCollector.on('collect', async collected => {
                  await collected.deferUpdate();
                  timeoutDuration = collected.values[0];
                  confirmTimeoutButton.setLabel(`Confirmar suspensão de ${timeoutDuration}s?`);
                  rowTimeoutButton.setComponents(confirmTimeoutButton);

                  const options = time.options.map(option => {
                    option.setDefault(option.data.value === timeoutDuration);
                    return option;
                  });
                  time.setOptions(options);
                  rowTime.setComponents(time);

                  await collected.editReply({ components: [rowTime, rowTimeoutButton] });
                });

                buttonCollector.on('end', async collected => {
                  if ('timeout-modal-confirm' === collected.first()?.customId) {
                    await this.timeoutUser(
                      username,
                      Number(timeoutDuration),
                      interaction.user,
                      user,
                      reason || undefined,
                      proofUrl || undefined
                    );

                    interaction.editReply({
                      content:    'Recebemos o seu pedido e ele já foi processado, se deu certo poderás vê-lo no canal de banimentos e timeouts!',
                      components: [],
                    });
                  }
                });
              }
            } catch (e: unknown) {
              if (
                (e as DiscordJs.ErrorEvent).message.includes(
                  'Could not find any entity of type "discord_link" matching'
                )
              ) {
                interaction.reply({
                  content: prepare(
                    'integrations.discord.your-account-is-not-linked',
                    { command: this.getCommand('!link') }
                  ),
                });
              }
            }
          }
        }

        if (!interaction.isChatInputCommand()) {
          return;
        }

        const { commandName, options } = interaction;

        if (commandName === 'ban-or-timeout') {
          await interaction.deferReply({ ephemeral: true });
          const attachment = options.getAttachment('proof');
          const row = new DiscordJs.ActionRowBuilder<DiscordJs.ButtonBuilder>();

          const confirmBanButton = new DiscordJs.ButtonBuilder()
            .setCustomId('ban-confirm')
            .setStyle(DiscordJs.ButtonStyle.Success)
            .setLabel('Quero banir um malandro');

          const confirmTimeoutButton = new DiscordJs.ButtonBuilder()
            .setCustomId('timeout-confirm')
            .setStyle(DiscordJs.ButtonStyle.Primary)
            .setLabel('Quero suspender um malandro');

          const denyButton = new DiscordJs.ButtonBuilder()
            .setCustomId('ban-cancel')
            .setStyle(DiscordJs.ButtonStyle.Danger)
            .setLabel('Eu fiz sem querer');

          row.addComponents(confirmBanButton, confirmTimeoutButton, denyButton);

          const embed = new DiscordJs.EmbedBuilder()
            .setTitle('Banimento/Suspensão de usuário')
            .setDescription('Você vai banir/suspender um usuário? Então escolhe e clica em um dos botões ai embaixo e informa o nome do malandro pra nois!');

          if (attachment?.url) {
            embed.setImage(attachment.url);
          }

          interaction.editReply({
            components: [row],
            embeds:     [embed],
          });

          const collector = interaction.channel?.createMessageComponentCollector({ componentType: DiscordJs.ComponentType.Button, max: 1 });

          collector?.on('end', async collected => {
            if (['ban-confirm', 'timeout-confirm', 'ban-cancel'].includes(collected.first()?.customId || '')) {
              await interaction.deleteReply();
            }
          });
        } else if (commandName === 'ping') {
          interaction.reply({
            content:   'Pong mermão',
            ephemeral: true,
          });
        }
      });

      this.client.on('messageCreate', async (msg) => {
        if (this.client && this.guild) {

          const isSelf = msg.author.tag === get(this.client, 'user.tag', null);
          const isDM = msg.channel.type === DiscordJs.ChannelType.DM;
          const isDifferentGuild = msg.guild?.id !== this.guild;
          const isInIgnoreList
             = this.ignorelist.includes(msg.author.tag)
            || this.ignorelist.includes(msg.author.id)
            || this.ignorelist.includes(msg.author.username);
          if (isSelf || isDM || isDifferentGuild || isInIgnoreList) {
            return;
          }

          if (msg.channel.type === DiscordJs.ChannelType.GuildText) {
            const listenAtChannels = [
              ...Array.isArray(this.listenAtChannels) ? this.listenAtChannels : [this.listenAtChannels],
            ].filter(o => o !== '');
            if (listenAtChannels.includes(msg.channel.id)) {
              this.message(msg.content, msg.channel, msg.author, msg);
            }
          }
        }
      });
    }
  }

  async message(content: string, channel: DiscordJs.TextChannel, author: DiscordJs.User, msg?: DiscordJs.Message) {
    chatIn(`#${channel.name}: ${content} [${author.tag}]`);
    if (msg) {
      const broadcasterUsername = variables.get('services.twitch.broadcasterUsername') as string;
      if (content === this.getCommand('!_debug')) {
        info('======= COPY DISCORD DEBUG MESSAGE FROM HERE =======');
        info('Content: ');
        info(content);
        info('Author: ');
        info(JSON.stringify(author, null, 2));
        info('Message: ');
        info(JSON.stringify(msg, null, 2));
        info('Channel: ');
        info(JSON.stringify(channel, null, 2));
        info('======= END OF DISCORD DEBUG MESSAGE =======');

        if (this.deleteMessagesAfterWhile) {
          setTimeout(() => {
            msg.delete();
          }, 10000);
        }
        return;
      }
      if (content === this.getCommand('!link')) {
        this.removeExpiredLinks();
        const link = await AppDataSource.getRepository(DiscordLink).save({
          userId:    null,
          tag:       author.tag,
          discordId: author.id,
          createdAt: Date.now(),
        });
        const message = prepare('integrations.discord.link-whisper', {
          tag:         author.tag,
          broadcaster: broadcasterUsername,
          id:          link.id,
          command:     this.getCommand('!link'),
        });
        author.send(message);
        whisperOut(`${author.tag}: ${message}`);

        const reply = await msg.reply(prepare('integrations.discord.check-your-dm'));
        chatOut(`#${channel.name}: @${author.tag}, ${prepare('integrations.discord.check-your-dm')} [${author.tag}]`);
        if (this.deleteMessagesAfterWhile) {
          setTimeout(() => {
            msg.delete();
            reply.delete();
          }, 10000);
        }
        return;
      } else if (content === this.getCommand('!unlink')) {
        await AppDataSource.getRepository(DiscordLink).delete({ discordId: author.id });
        const reply = await msg.reply(prepare('integrations.discord.all-your-links-were-deleted'));
        chatOut(`#${channel.name}: @${author.tag}, ${prepare('integrations.discord.all-your-links-were-deleted')} [${author.tag}]`);
        if (this.deleteMessagesAfterWhile) {
          setTimeout(() => {
            msg.delete();
            reply.delete();
          }, 10000);
        }
        return;
      }
    }
    try {
      // get linked account
      const link = await AppDataSource.getRepository(DiscordLink).findOneByOrFail({ discordId: author.id, userId: Not(IsNull()) });
      if (link.userId) {
        const user = await changelog.getOrFail(link.userId);
        const parser = new Parser();
        parser.started_at = (msg || { createdTimestamp: Date.now() }).createdTimestamp;
        parser.discord = { author, channel };
        parser.sender = getUserSender(user.userId, user.userName);

        eventEmitter.emit('keyword-send-x-times', {
          userName: user.userName, message: content, source: 'discord',
        });
        if (content.startsWith('!')) {
          eventEmitter.emit('command-send-x-times', {
            userName: user.userName, message: content, source: 'discord',
          });
        }

        parser.message = content;
        parser.process().then(responses => {
          if (responses) {
            for (let i = 0; i < responses.length; i++) {
              setTimeout(async () => {
                if (channel.type === DiscordJs.ChannelType.GuildText) {
                  const messageToSend = await new Message(await responses[i].response).parse({
                    ...responses[i].attr,
                    forceWithoutAt: true, // we dont need @
                    sender:         { ...responses[i].sender },
                    discord:        { author, channel },
                  }) as string;
                  const reply = await channel.send(messageToSend);
                  chatOut(`#${channel.name}: ${messageToSend} [${author.tag}]`);
                  if (this.deleteMessagesAfterWhile) {
                    setTimeout(() => {
                      reply.delete();
                    }, 10000);
                  }
                }
              }, 1000 * i);
            }
          }
          if (this.deleteMessagesAfterWhile) {
            if (msg) {
              setTimeout(() => {
                msg.delete();
              }, 10000);
            }
          }
        });
      }
    } catch (e: any) {
      const message = prepare('integrations.discord.your-account-is-not-linked', { command: this.getCommand('!link') });
      if (msg && !msg.content.startsWith('!')) {
        const reply = await msg.reply(message);
        chatOut(`#${channel.name}: @${author.tag}, ${message} [${author.tag}]`);
        if (this.deleteMessagesAfterWhile) {
          setTimeout(() => {
            msg.delete();
            reply.delete();
          }, 10000);
        }
      }
    }
  }

  sockets() {
    adminEndpoint('/integrations/discord', 'discord::getRoles', async (cb) => {
      try {
        if (this.client && this.guild) {
          return cb(null, this.client.guilds.cache.get(this.guild)?.roles.cache
            .sort((a, b) => {
              const nameA = a.name.toUpperCase(); // ignore upper and lowercase
              const nameB = b.name.toUpperCase(); // ignore upper and lowercase
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              // names must be equal
              return 0;
            })
            .map(o => ({ text: `<strong>${o.name}</strong> <small class="font-italic">${o.id}</small>`, value: o.id })) || [],
          );
        } else {
          cb(null, []);
        }
      } catch (e: any) {
        cb(e.message, []);
      }
    });
    adminEndpoint('/integrations/discord', 'discord::getGuilds', async (cb) => {
      try {
        if (this.client) {
          await this.client.guilds.fetch();
          return cb(null, this.client.guilds.cache
            .sort((a, b) => {
              const nameA = a.name.toUpperCase(); // ignore upper and lowercase
              const nameB = b.name.toUpperCase(); // ignore upper and lowercase
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              // names must be equal
              return 0;
            })
            .map(o => ({ text: `<strong>${o.name}</strong> <small class="font-italic">${o.id}</small>`, value: o.id })));
        } else {
          cb(null, []);
        }
      } catch (e: any) {
        cb(e.message, []);
      }
    });
    adminEndpoint('/integrations/discord', 'discord::getChannels', async (cb) => {
      try {
        if (this.client && this.guild) {
          cb(null, this.client.guilds.cache.get(this.guild)?.channels.cache
            .filter(o => o.type === DiscordJs.ChannelType.GuildText)
            .sort((a, b) => {
              const nameA = (a as DiscordJs.TextChannel).name.toUpperCase(); // ignore upper and lowercase
              const nameB = (b as DiscordJs.TextChannel).name.toUpperCase(); // ignore upper and lowercase
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              // names must be equal
              return 0;
            })
            .map(o => ({ text: `<strong>#${(o as DiscordJs.TextChannel).name}</strong> <small class="font-italic">${o.id}</small>`, value: o.id })) || [],
          );
        } else {
          cb(null, []);
        }
      } catch (e: any) {
        cb(e.stack, []);
      }
    });
    adminEndpoint('/integrations/discord', 'discord::authorize', async (cb) => {
      if (this.token === '' || this.clientId === '') {
        cb('Cannot authorize! Missing clientId or token. Please save changes before authorizing.', null);
      } else {
        try {
          cb(null, { do: 'redirect', opts: [`https://discordapp.com/oauth2/authorize?&scope=bot&permissions=8&client_id=${this.clientId}`] });
        } catch (e: any) {
          error(e.stack);
          cb(e.stack, null);
        }
      }
    });
  }
}

const self = new Discord();
export default self;
