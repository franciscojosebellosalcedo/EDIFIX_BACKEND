import { container } from "tsyringe";
import { UserEntityDB } from "../infraestructure/database/user.entity.db.js";
import { USER_TOKENS } from "./user.container.tokens.ts";
import type { Repository } from "typeorm";
import { AppDataSource } from "../../../../config/database/database.config.ts";
import type { UserRepository } from "../domain/repositories/user.repository.ts";
import { UserRepositoryImpl } from "../infraestructure/repositories/user.repository.impl.ts";
import { UserController } from "../presentation/controller/user.controller.js";
import { CreateUserUseCase } from "../application/create.user.use-case.js";
import { UserSeeder } from "../../../../seeders/user.seeder.js";

container.register<Repository<UserEntityDB>>(
    USER_TOKENS.REPOSITORY_DB,
    {
        useFactory : () => {
            return AppDataSource.getRepository(UserEntityDB)
        }
    }
);

container.register<CreateUserUseCase>(
    USER_TOKENS.CREATE_USE_CASE,
    {
        useClass: CreateUserUseCase
    }
);

container.register<UserController>(
    USER_TOKENS.CONTROLLER,
    {
        useClass: UserController
    }
);

container.register<UserRepository>(
    USER_TOKENS.REPOSITORY,
    {
        useClass: UserRepositoryImpl
    }
);

container.register<UserSeeder>(
    USER_TOKENS.USER_SEEDER,
    {
        useClass: UserSeeder
    }
)