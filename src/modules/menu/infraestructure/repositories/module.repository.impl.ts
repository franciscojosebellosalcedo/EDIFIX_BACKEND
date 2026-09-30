import { inject, injectable } from "tsyringe";
import type { ModuleRepository } from "../../domain/repositories/module.repository.ts";
import type { TMenu } from "../../types/menu.type.ts";
import type { Repository } from "typeorm";
import type { ModuleEntityDB } from "../database/module.entity.db.ts";
import { MENU_TOKENS, OPTION_TOKENS } from "../../container/menu.container.tokens.ts";
import type { OptionEntityDB } from "../database/option.entity.db.ts";

@injectable()
export class ModuleRepositoryImpl implements ModuleRepository {

    constructor(
        @inject(MENU_TOKENS.REPOSITORY_DB)
        private readonly moduleRepositoryDB: Repository<ModuleEntityDB>,

        @inject(OPTION_TOKENS.REPOSITORY_DB)
        private readonly optionRepositoryDB: Repository<OptionEntityDB>
    ) { }

    getMenu = async (): Promise<TMenu[]> => {

        const modules = await this.moduleRepositoryDB.findBy({
            modulo_Activo: true
        });

        return await Promise.all(
            modules.map(async (module): Promise<TMenu> => {

                const options = await this.optionRepositoryDB.findBy({
                    opcion_ModuloId: module.modulo_Id,
                    opcion_Activo: true
                });

                return {
                    module,
                    options
                };
            })
        );
    };

}