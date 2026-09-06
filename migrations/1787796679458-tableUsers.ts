import { MigrationInterface, QueryRunner } from "typeorm";

export class TableUsers1787796679458 implements MigrationInterface {
    name = 'TableUsers1787796679458'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`usuarios\` (\`usua_Id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`usua_Id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`usuarios\``);
    }

}
