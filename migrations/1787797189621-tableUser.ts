import { MigrationInterface, QueryRunner } from "typeorm";

export class TableUser1787797189621 implements MigrationInterface {
    name = 'TableUser1787797189621'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`usua_NombreUsuario\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`usua_Contrasenia\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`usua_Codigo\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`usua_RolId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`usua_UltimoAcceso\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`usua_CreacionId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`usua_ModificacionId\` int NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`usua_Creacion\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`usua_Modificacion\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`usua_Nombre\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`usua_Nombre\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`usua_Nombre\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`usua_Nombre\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`usua_Modificacion\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`usua_Creacion\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`usua_ModificacionId\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`usua_CreacionId\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`usua_UltimoAcceso\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`usua_RolId\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`usua_Codigo\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`usua_Contrasenia\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`usua_NombreUsuario\``);
    }

}
