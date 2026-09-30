import { MigrationInterface, QueryRunner } from "typeorm";

export class ModulosOpciones1788892276161 implements MigrationInterface {
    name = 'ModulosOpciones1788892276161'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`modulos\` (\`modulo_Id\` int NOT NULL AUTO_INCREMENT, \`modulo_Nombre\` varchar(255) NOT NULL, \`modulo_Icono\` varchar(255) NOT NULL, \`modulo_Orden\` int NOT NULL, \`modulo_Activo\` tinyint NOT NULL DEFAULT 1, \`modulo_Codigo\` varchar(255) NOT NULL, \`modulo_Creacion\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modulo_Modificacion\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`modulo_Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`opciones\` (\`opcion_Id\` int NOT NULL AUTO_INCREMENT, \`opcion_ModuloId\` int NOT NULL, \`opcion_Nombre\` varchar(255) NOT NULL, \`opcion_Ruta\` varchar(255) NOT NULL, \`opcion_Orden\` int NOT NULL, \`opcion_Codigo\` varchar(255) NOT NULL, \`opcion_Activo\` tinyint NOT NULL DEFAULT 1, \`opcion_Creacion\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`opcion_Modificacion\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`opcion_Id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`opciones\``);
        await queryRunner.query(`DROP TABLE \`modulos\``);
    }

}
