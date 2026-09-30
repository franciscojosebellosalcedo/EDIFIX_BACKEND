import { inject, injectable } from "tsyringe";
import type { Repository } from "typeorm";
import type { ModuleEntityDB } from "../modules/menu/infraestructure/database/module.entity.db.ts";
import { MENU_TOKENS, OPTION_TOKENS } from "../modules/menu/container/menu.container.tokens.ts";
import type { OptionEntityDB } from "../modules/menu/infraestructure/database/option.entity.db.ts";
import type { TMenu, TModule } from "../modules/menu/types/menu.type.ts";

@injectable()
export class MenuSeeder {

    constructor(

        @inject(MENU_TOKENS.REPOSITORY_DB)
        private readonly moduleRepositoryDB: Repository<ModuleEntityDB>,

        @inject( OPTION_TOKENS.REPOSITORY_DB )
        private readonly optionRepositoryDB: Repository<OptionEntityDB>

    ){}

    async execute(){
        try {

            const menu: TMenu[] = [
                {
                    module: {
                        modulo_Nombre: "Configuración",
                        modulo_Icono: "bi-gear",
                        modulo_Activo: true,
                        modulo_Codigo: "CONFIGURACION",
                        modulo_Orden: 7,

                    },
                    options: [
                        {opcion_Nombre: "Usuarios", opcion_Codigo: "CONFIGURACION_USUARIOS",opcion_Activo: true, opcion_Ruta: "/settings/users", opcion_Orden: 1 },
                        {opcion_Nombre: "Roles", opcion_Codigo: "CONFIGURACION_ROLES",opcion_Activo: true, opcion_Ruta: "/settings/rols" , opcion_Orden: 2},
                    ]
                }
            ];

            menu.map(async (m) =>{

                const { module , options } = m;

                //save module

                const exist = await this.moduleRepositoryDB.findOneBy({ modulo_Codigo: module.modulo_Codigo });
                let currentModule: TModule | null = null;

                if(!exist){

                    const moduleNew = this.moduleRepositoryDB.create({...module });
                    currentModule = await this.moduleRepositoryDB.save( moduleNew );

                }else{

                    currentModule = exist;

                }

                // save options
                options.map(async ( option ) => {

                    const exist = await this.optionRepositoryDB.findOneBy({ opcion_Codigo: option.opcion_Codigo });

                    if(!exist){

                        const optionNew = this.optionRepositoryDB.create({
                            ...option,
                            opcion_ModuloId: currentModule.modulo_Id
                        });

                        await this.optionRepositoryDB.save( optionNew );

                    }

                });

            });

            console.log("Seeder menu execute successfully");
            
        } catch (error) {
            
            console.error("Error during execute seeder menu:", error );

        }
    }
}