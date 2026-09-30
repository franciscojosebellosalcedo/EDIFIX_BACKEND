import { container } from "tsyringe";
import { Repository } from "typeorm";
import { ModuleEntityDB } from "../infraestructure/database/module.entity.db.js";
import { MENU_TOKENS, OPTION_TOKENS } from "./menu.container.tokens.ts";
import { AppDataSource } from "../../../config/database/database.config.ts";
import { ModuleRepositoryImpl } from "../infraestructure/repositories/module.repository.impl.js";
import type { ModuleRepository } from "../domain/repositories/module.repository.ts";
import { MenuSeeder } from "../../../seeders/menu.seeder.js";
import type { OptionRepository } from "../domain/repositories/option.repository.ts";
import { OptionEntityDB } from "../infraestructure/database/option.entity.db.js";
import { OptionRepositoryImpl } from "../infraestructure/repositories/option.repository.impl.ts";
import { MenuController } from "../presentation/controller/menu.controller.js";
import { GetMenuUseCase } from "../application/get.menu.use.case.js";

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
);

container.register<MenuSeeder>(
    MENU_TOKENS.SEEDER,
    {
        useClass: MenuSeeder
    }
);

container.register<Repository<OptionEntityDB>>(
    OPTION_TOKENS.REPOSITORY_DB,
    {
        useFactory: ()=>{
            return AppDataSource.getRepository( OptionEntityDB );
        }
    }
);

container.register<GetMenuUseCase>(
    MENU_TOKENS.GET_MENU_USE_CASE,
    {
        useClass: GetMenuUseCase
    }
)

container.register<MenuController>(
    MENU_TOKENS.CONTROLLER,
    {
        useClass: MenuController
    }
)

container.register<OptionRepository>(
    OPTION_TOKENS.REPOSITORY,
    {
        useClass: OptionRepositoryImpl
    }
);