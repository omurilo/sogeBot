import { EntitySchema } from 'typeorm';
import { v4 } from 'uuid';

import { ColumnNumericTransformer } from './_transformer';

export interface EventListInterface {
  id?: string;
  event: string;
  userId: string;
  timestamp: number;
  isTest: boolean;
  isHidden?: boolean;
  values_json: string;
}

export const EventList = new EntitySchema<Required<EventListInterface>>({
  name:    'event_list',
  columns: {
    id: {
      type: 'uuid', primary: true, default: v4(),
    },
    event:       { type: String },
    userId:      { type: String },
    timestamp:   { type: 'bigint', transformer: new ColumnNumericTransformer() },
    isTest:      { type: 'boolean' },
    isHidden:    { type: 'boolean', default: false },
    values_json: { type: 'text' },
  },
  indices: [
    { name: 'IDX_8a80a3cf6b2d815920a390968a', columns: ['userId'] },
  ],
});
