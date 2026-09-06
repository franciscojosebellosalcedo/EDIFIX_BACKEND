import { MigrationInterface, QueryRunner } from "typeorm";

export class TableUsers1787796951296 implements MigrationInterface {
    name = 'TableUsers1787796951296'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`usua_Nombre\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`usua_Nombre\``);
    }

}
