import { MigrationInterface, QueryRunner } from "typeorm";

export class RolesYPermisos1789775298454 implements MigrationInterface {
    name = 'RolesYPermisos1789775298454'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`rol_permisos\` (\`perol_Id\` int NOT NULL AUTO_INCREMENT, \`perol_RolId\` int NOT NULL, \`perol_OpcionId\` int NOT NULL, \`perol_Crear\` tinyint NOT NULL DEFAULT 0, \`perol_Editar\` tinyint NOT NULL DEFAULT 0, \`perol_CambiarStatus\` tinyint NOT NULL DEFAULT 0, \`perol_Activo\` tinyint NOT NULL DEFAULT 1, \`perol_CreacionId\` int NOT NULL, \`perol_ModificacionId\` int NOT NULL DEFAULT '0', \`perol_Creacion\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`perol_Modificacion\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`perol_Id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`rol_permisos\``);
    }

}
