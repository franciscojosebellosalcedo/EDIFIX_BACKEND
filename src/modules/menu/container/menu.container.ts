import { container } from "tsyringe";
import { Repository } from "typeorm";
import { ModuleEntityDB } from "../infraestructure/database/module.entity.db.js";
import { MENU_TOKENS } from "./menu.container.tokens.ts";
import { AppDataSource } from "../../../config/database/database.config.ts";
import { ModuleRepositoryImpl } from "../infraestructure/repositories/module.repository.impl.js";
import type { ModuleRepository } from "../domain/repositories/module.repository.ts";

container.register<Repository<ModuleEntityDB>>(
    MENU_TOKENS.REPOSITORY_DB,
    {
        useFactory: () => {
            return AppDataSource.getRepository( ModuleEntityDB );
        }
    }
);

container.register<ModuleRepository>(
    MENU_TOKENS.REPOSITORY,
    {
        useClass: ModuleRepositoryImpl
    }
)