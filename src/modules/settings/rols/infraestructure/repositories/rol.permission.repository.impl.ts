import { inject, injectable } from "tsyringe";
import type { RolPermissionRepository } from "../../domain/repositories/rol.permission.repository.ts";
import type { RolPermissionEntity } from "../../domain/entities/rol.permission.entity.ts";
import type { Repository } from "typeorm";
import type { RolPermissionEntityDB } from "../database/rol.permission.entity.db.ts";
import { ROL_PERMISSION_TOKENS } from "../../container/rol.permission.tokens.ts";
import type { TCreateRolPermission } from "../../types/rol.type.ts";

@injectable()
export class RolPermissionRepositoryImpl implements RolPermissionRepository {

    constructor(
        @inject( ROL_PERMISSION_TOKENS.REPOSITORY_DB )
        private readonly rolPermissionRepositoryDB: Repository<RolPermissionEntityDB>
    ){}

    async create(permissions: TCreateRolPermission[]): Promise<RolPermissionEntity[]> {
        
        for (let index = 0; index < permissions.length; index++) {

            const permission = permissions[index];
            const permissionNew = this.rolPermissionRepositoryDB.create( {...permission} );

            await this.rolPermissionRepositoryDB.save( permissionNew );
        }

        return await this.rolPermissionRepositoryDB.findBy({ perol_RolId: permissions[0]?.perol_RolId ?? 0 });
        
    }

    async findByIdRol(idRol: number): Promise<RolPermissionEntity[]> {

        return await this.rolPermissionRepositoryDB.findBy({ perol_RolId: idRol });
        
    }

}