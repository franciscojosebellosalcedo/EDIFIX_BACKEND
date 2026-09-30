import { container } from "tsyringe";
import type { Repository } from "typeorm";
import type { RolPermissionRepository } from "../domain/repositories/rol.permission.repository.ts";
import { RolPermissionEntityDB } from "../infraestructure/database/rol.permission.entity.db.js";
import { RolPermissionRepositoryImpl } from "../infraestructure/repositories/rol.permission.repository.impl.ts";
import { ROL_PERMISSION_TOKENS } from "./rol.permission.tokens.ts";
import { AppDataSource } from "../../../../config/database/database.config.ts";

container.register<RolPermissionRepository>(
    ROL_PERMISSION_TOKENS.REPOSITORY,
    {
        useClass: RolPermissionRepositoryImpl
    }
);

container.register<Repository<RolPermissionEntityDB>>(
    ROL_PERMISSION_TOKENS.REPOSITORY_DB,
    {
        useFactory: () =>{
            return AppDataSource.getRepository( RolPermissionEntityDB );
        }
    }
)