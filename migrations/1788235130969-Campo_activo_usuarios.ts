import { MigrationInterface, QueryRunner } from "typeorm";

export class CampoActivoUsuarios1788235130969 implements MigrationInterface {
    name = 'CampoActivoUsuarios1788235130969'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`usua_Activo\` tinyint NOT NULL DEFAULT 1`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`usua_Activo\``);
    }

}
