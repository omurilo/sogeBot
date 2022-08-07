import { v4 } from 'uuid';

import Overlay from './_interface';

import {
  command, default_permission,
} from '~/decorators';
import { warning } from '~/helpers/log';
import { defaultPermissions } from '~/helpers/permissions/index';

class TextToSpeech extends Overlay {
  @command('!tts')
  @default_permission(defaultPermissions.CASTERS)
  async textToSpeech(opts: CommandOptions): Promise<CommandResponse[]> {
    const { default: tts, services } = await import ('../tts');
    if (tts.ready) {
      let key = v4();
      if (tts.service === services.RESPONSIVEVOICE) {
        key = tts.responsiveVoiceKey;
      }
      if (tts.service === services.GOOGLE) {
        tts.addSecureKey(key);
      }

      this.emit('speak', {
        text:      opts.parameters,
        highlight: opts.attr.highlight,
        service:   tts.service,
        key,
      });
    } else {
      warning('!tts command cannot be executed. TTS is not properly set in a bot.');
    }
    return [];
  }
}

export default new TextToSpeech();
