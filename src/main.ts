import "reflect-metadata";
import app from "./app.ts";
import { AppDataSource } from "./config/database/database.config.ts";
import { envConfig } from "./config/env/env.config.ts";
import { executeSeeders } from "./seeders/seeder.execute.ts";

const boostrapApp = async () =>{

    await AppDataSource.initialize();

    console.log();
    console.log("Database connected");
    console.log();

    await executeSeeders()

    app.listen( envConfig.appPort , ()=>{

        console.log(`Environment: ${envConfig.nodeEnv}`);
        console.log(`Server running in port ${envConfig.appPort}`);
        
    });
}

boostrapApp();