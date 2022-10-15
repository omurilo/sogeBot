import { MigrationInterface, QueryRunner } from 'typeorm';

export class mergeHLTBCreatedAt1651843397007 implements MigrationInterface {
  name = 'mergeHLTBCreatedAt1651843397007';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const items = await queryRunner.query(`SELECT * from "how_long_to_beat_game_item"`);
    const map = new Map();

    for(const item of items) {
      if (map.get(item.createdAt)) {
        const mapItem = map.get(item.createdAt);
        item.timestamp = Number(item.timestamp) + Number(mapItem.timestamp);
      }
      map.set(item.createdAt, item);
    }

    await queryRunner.query(`DELETE FROM "how_long_to_beat_game_item" WHERE 1=1`);
    for(const item of map.values()) {
      await queryRunner.query(`INSERT INTO "how_long_to_beat_game_item" (${Object.keys(item).map(o => `"${o}"`).join(", ")}) values (${Object.values(item).map(o => (typeof o === "string" || typeof o === "object") ? `'${o}'` : o)})`);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return;
  }
}
