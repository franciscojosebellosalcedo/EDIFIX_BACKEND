import { inject, injectable } from "tsyringe";
import type { ModuleRepository } from "../../domain/repositories/module.repository.ts";
import type { TMenu } from "../../types/menu.type.ts";
import type { Repository } from "typeorm";
import type { ModuleEntityDB } from "../database/module.entity.db.ts";
import { MENU_TOKENS } from "../../container/menu.container.tokens.ts";

@injectable()
export class ModuleRepositoryImpl implements ModuleRepository {

    constructor(
        @inject(MENU_TOKENS.REPOSITORY_DB)
        private readonly moduleRepositoryDB: Repository<ModuleEntityDB>
    ){}

    getMenu = async (): Promise<TMenu[]> => {
        
        const modules = await this.moduleRepositoryDB.findBy({
            modulo_Activo: true
        });

        return modules.map((module) => ({module, options: [] }));
    }

}