import { EntitySchema } from 'typeorm';
import { v4 } from 'uuid';

export interface TextInterface {
  id?: string;
  name: string;
  text: string;
  css: string;
  js: string;
  external: string[];
}

export const Text = new EntitySchema<Readonly<Required<TextInterface>>>({
  name:    'text',
  columns: {
    id: {
      type: String, primary: true, default: v4(),
    },
    name:     { type: String },
    text:     { type: 'text' },
    css:      { type: 'text' },
    js:       { type: 'text' },
    external: { type: 'simple-array' },
  },
});
