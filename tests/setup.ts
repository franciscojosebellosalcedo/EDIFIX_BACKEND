import dotenv from "dotenv";
import { beforeAll, afterAll } from "vitest";
import { AppDataSource } from "../src/config/database/database.config";

dotenv.config({
    path: "./.env.test"
});

beforeAll( async ()=>{

    if(!AppDataSource.isInitialized){

        await AppDataSource.initialize();

    }

});

afterAll( async ()=>{

    if( AppDataSource.isInitialized){
        
        await AppDataSource.destroy();

    }

})

