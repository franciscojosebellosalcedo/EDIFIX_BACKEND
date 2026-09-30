import { container } from "tsyringe";
import type { RolRepository } from "../domain/repositories/rol.repository.ts";
import { RolRepositoryImpl } from "../infraestructure/repositories/rol.repository.impl.ts";
import { ROL_TOKENS } from "./rol.tokens.ts";
import type { Repository } from "typeorm";
import { RolEntityDB } from "../infraestructure/database/rol.entity.db.js";
import { AppDataSource } from "../../../../config/database/database.config.ts";
import { CreateRolUseCase } from "../application/create.rol.use.case.js";
import { RolController } from "../presentation/controller/rol.controller.js";
import { GetRolByIdUseCase } from "../application/get.rol.by.id.use.case.js";
import { RolSeeder } from "../../../../seeders/rol.seeder.js";
import { PaginateRolUseCase } from "../application/paginate.rol.use.case.js";

container.register<RolRepository>(
    ROL_TOKENS.REPOSITORY,
    {
        useClass: RolRepositoryImpl
    }
);

container.register<RolSeeder>(
    ROL_TOKENS.SEEDER,
    {
        useClass: RolSeeder
    }
)

container.register<PaginateRolUseCase>(
    ROL_TOKENS.PAGINATE,
    {
        useClass: PaginateRolUseCase
    }
)

container.register<GetRolByIdUseCase>(
    ROL_TOKENS.GET_ROL_BY_ID,
    {
        useClass: GetRolByIdUseCase
    }
)

container.register<RolController>(
    ROL_TOKENS.CONTROLLER,
    {
        useClass: RolController
    }
);

container.register<CreateRolUseCase>(
    ROL_TOKENS.CREATE_ROL_USE_CASE,
    {
        useClass: CreateRolUseCase
    }
);

container.register<Repository<RolEntityDB>>(
    ROL_TOKENS.REPOSITORY_DB,
    {
        useFactory: () =>{
            return AppDataSource.getRepository( RolEntityDB )
        }
    }
);