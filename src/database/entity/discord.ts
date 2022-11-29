import { EntitySchema } from 'typeorm';
import { v4 } from 'uuid';

import { ColumnNumericTransformer } from './_transformer';

export interface DiscordLinkInterface {
  id: string | undefined;
  tag: string;
  discordId: string;
  createdAt: number;
  userId: null | string;
}

export const DiscordLink = new EntitySchema<Readonly<Required<DiscordLinkInterface>>>({
  name:    'discord_link',
  columns: {
    id: {
      type: 'uuid', primary: true, default: v4(),
    },
    tag:       { type: String },
    discordId: { type: String },
    createdAt: { type: 'bigint', transformer: new ColumnNumericTransformer() },
    userId:    { type: String, nullable: true },
  },
});
