import { MigrationInterface, QueryRunner } from "typeorm";

export class RolesYPermisos1789774985582 implements MigrationInterface {
    name = 'RolesYPermisos1789774985582'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`roles\` (\`rol_Id\` int NOT NULL AUTO_INCREMENT, \`rol_Nombre\` varchar(255) NOT NULL, \`rol_Descripcion\` varchar(255) NOT NULL, \`rol_Codigo\` varchar(255) NOT NULL DEFAULT '', \`rol_Activo\` tinyint NOT NULL DEFAULT 1, \`rol_CreacionId\` int NOT NULL, \`rol_ModificacionId\` int NOT NULL DEFAULT '0', \`rol_Creacion\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`rol_Modificacion\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`rol_Id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`roles\``);
    }

}
