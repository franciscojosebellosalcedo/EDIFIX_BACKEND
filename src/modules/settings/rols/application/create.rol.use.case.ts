import { inject, injectable } from "tsyringe";

import type { RolRepository } from "../domain/repositories/rol.repository.ts";
import type { RolPermissionRepository } from "../domain/repositories/rol.permission.repository.ts";

import { ROL_TOKENS } from "../container/rol.tokens.ts";
import { ROL_PERMISSION_TOKENS } from "../container/rol.permission.tokens.ts";

import { AppException } from "../../../../shared/errors/handler.error.ts";
import { ROL_RESPONSE_CODE } from "../../../../shared/reseponse/rol.response.code.ts";

import type {
    TCreateRolPermission,
    TDataCreateRol
} from "../types/rol.type.ts";
import { DATABASE_TOKENS } from "../../../../shared/database/database.container.tokens.ts";
import type { IUnitOfWork } from "../../../../shared/database/unit.of.work.ts";

@injectable()
export class CreateRolUseCase {

    constructor(
        @inject(DATABASE_TOKENS.UNIT_OF_WORK)
        private readonly unitOfWork: IUnitOfWork
    ) {}

    async execute(values: TDataCreateRol, idUser: number) {

        return this.unitOfWork.execute(async (context) => {

            const rolRepository = context.resolve<RolRepository>( ROL_TOKENS.REPOSITORY );

            const rolPermissionRepository = context.resolve<RolPermissionRepository>( ROL_PERMISSION_TOKENS.REPOSITORY );

            const { rol, permissions } = values;

            const exist = await rolRepository.findByName( rol.rol_Nombre );

            if (exist) {
                throw new AppException(
                    400,
                    ROL_RESPONSE_CODE.ROL_EXIST,
                    `Rol ${rol.rol_Nombre} ya existente`
                );
            }

            // create rol
            const rolCreated = await rolRepository.create({
                ...rol,
                rol_CreacionId: idUser
            });

            if (!rolCreated) {
                throw new AppException(
                    400,
                    ROL_RESPONSE_CODE.ROL_ERROR_CREATED,
                    `Error al crear rol ${rol.rol_Nombre}`
                );
            }

            // create rol permissions
            const listPermissions: TCreateRolPermission[] =
                permissions.map(permission => ({
                    perol_RolId: rolCreated.rol_Id ?? 0,
                    perol_CreacionId: idUser,
                    perol_OpcionId: permission.perol_OpcionId,
                    perol_Crear: permission.perol_Crear,
                    perol_Editar: permission.perol_Editar,
                    perol_CambiarStatus: permission.perol_CambiarStatus
                }));

            const permissionCreated = await rolPermissionRepository.create( listPermissions );

            return {
                rol: rolCreated,
                permissions: permissionCreated
            };

        });
    }
}