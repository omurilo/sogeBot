import { IsNotEmpty, Min, MinLength } from 'class-validator';
import { Column, Entity, Index, PrimaryColumn } from 'typeorm';
import { v4 } from 'uuid';
import { BotEntity } from '~/database/BotEntity';

@Entity()
@Index('IDX_93c78c94804a13befdace81904', ['type', 'value'], { unique: true })
export class Rank extends BotEntity<Rank> {
  @PrimaryColumn({ default: v4() })
    id: string;

  @Column()
  @Min(0)
    value: number;

  @Column()
  @MinLength(2)
  @IsNotEmpty()
    rank: string;

  @Column()
    type: 'viewer' | 'subscriber';
}
