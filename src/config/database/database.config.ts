
import { DataSource } from "typeorm";
import { envConfig } from "../env/env.config.ts";
import path from "node:path";
import { UserEntityDB } from "../../modules/settings/users/infraestructure/database/user.entity.db.ts";

export const AppDataSource = new DataSource({

    type: "mysql",

    database: envConfig.dbName,

    port: envConfig.dbPort,

    host: envConfig.dbHost,

    username: envConfig.dbUser,

    password: envConfig.dbPassword,

    synchronize: false,

    entities: [
        UserEntityDB
    ],

    migrations: process.env.RUNNING_TESTS === "true" ? [] : [
        path.resolve(
            process.cwd(),
            "migrations/*.{ts,js}"
        )
    ],

    logging: false,

});