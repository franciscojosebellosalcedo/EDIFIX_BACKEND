import { inject, injectable } from "tsyringe";
import type { Repository } from "typeorm";
import { ROL_TOKENS } from "../modules/settings/rols/container/rol.tokens.ts";
import { RolEntity } from "../modules/settings/rols/domain/entities/rol.entity.js";
import type { RolEntityDB } from "../modules/settings/rols/infraestructure/database/rol.entity.db.ts";
import { USER_TOKENS } from "../modules/settings/users/container/user.container.tokens.ts";
import type { UserEntityDB } from "../modules/settings/users/infraestructure/database/user.entity.db.ts";

@injectable()
export class RolSeeder {

    constructor(

        @inject(ROL_TOKENS.REPOSITORY_DB)
        private readonly rolRepositoryDB: Repository<RolEntityDB>

    ) { }

    async execute() {

        const rols: RolEntity[] = [
            new RolEntity(null, "Administrador", "Acceso total al sistema", "ADMIN", true, 1, 0, new Date(), new Date())
        ];

        for (let index = 0; index < rols.length; index++) {

            const rol = rols[index];

            const exist = await this.rolRepositoryDB.findOneBy({ rol_Codigo: rol?.rol_Codigo });

            if (!exist) {

                const rolNew = this.rolRepositoryDB.create({
                    rol_Nombre: rol?.rol_Nombre,
                    rol_Codigo: rol?.rol_Codigo,
                    rol_CreacionId: rol?.rol_CreacionId,
                    rol_Descripcion: rol?.rol_Descripcion
                });

                await this.rolRepositoryDB.save(rolNew);

            }

        }

    }
}