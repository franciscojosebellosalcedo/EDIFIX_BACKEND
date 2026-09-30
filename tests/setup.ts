import dotenv from "dotenv";
import { beforeAll, afterAll } from "vitest";
import { AppDataSource } from "../src/config/database/database.config";
import request from "supertest";
import app from "../src/app";
import { appConfig } from "../src/config/app.config";
import { UserEntityDB } from "../src/modules/settings/users/infraestructure/database/user.entity.db";
import { Security } from "../src/shared/security";
import { testContext } from "./test.context";

dotenv.config({
    path: "./.env.test"
});

beforeAll( async ()=>{

    if(!AppDataSource.isInitialized){

        await AppDataSource.initialize();

    }

    const repository = AppDataSource.getRepository(UserEntityDB);

    const code = "ADMIN";

    const exist = await repository.findOneBy({ usua_Codigo: code });

    if(!exist){

        const passwordHash = Security.hasPassword("admin2024");
    
        const user = repository.create({
            usua_Nombre: "Administrador",
            usua_NombreUsuario: "admin",
            usua_Codigo: "ADMIN",
            usua_CreacionId: 1,
            usua_Contrasenia: passwordHash,
            usua_RolId: 1
        });
    
        await repository.save(user);

    }

    const response = await request( app )
        .post( appConfig.prefix + "/auth/login")
        .send({
            usua_NombreUsuario: "admin",
            usua_Contrasenia: "admin2024"
        });
    
    testContext.accessToken = response.body.data.accessToken;

});

afterAll(async () => {

    if (AppDataSource.isInitialized) {

        await AppDataSource.query(`SET FOREIGN_KEY_CHECKS = 0`);

        const tables = await AppDataSource.query(`
            SELECT table_name
            FROM information_schema.tables
            WHERE table_schema = DATABASE()
        `);

        for (const table of tables) {
            await AppDataSource.query(
                `TRUNCATE TABLE \`${table.TABLE_NAME}\``
            );
        }

        await AppDataSource.query(`SET FOREIGN_KEY_CHECKS = 1`);

        await AppDataSource.destroy();
    }

});

