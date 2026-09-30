import { inject, injectable } from "tsyringe";
import { ROL_TOKENS } from "../container/rol.tokens.ts";
import type { RolRepository } from "../domain/repositories/rol.repository.ts";
import { ROL_PERMISSION_TOKENS } from "../container/rol.permission.tokens.ts";
import type { RolPermissionRepository } from "../domain/repositories/rol.permission.repository.ts";
import { AppException } from "../../../../shared/errors/handler.error.ts";
import { ROL_RESPONSE_CODE } from "../../../../shared/reseponse/rol.response.code.ts";

@injectable()
export class GetRolByIdUseCase {

    constructor(

        @inject( ROL_TOKENS.REPOSITORY )
        private readonly rolRepository: RolRepository,

        @inject( ROL_PERMISSION_TOKENS.REPOSITORY )
        private readonly rolPermissionRepository: RolPermissionRepository

    ){}

    async execute( idRol: number ){

        if(!idRol || isNaN( Number(idRol) ) ){

            throw new AppException(
                404,
                ROL_RESPONSE_CODE.ROL_NOT_FOUND,
                "Rol no encontrado"
            );

        }

        const rol =  await this.rolRepository.findById( idRol );

        if(!rol){

            throw new AppException(
                404,
                ROL_RESPONSE_CODE.ROL_NOT_FOUND,
                "Rol no encontrado"
            );

        }

        const permissions = await this.rolPermissionRepository.findByIdRol( idRol );

        return {
            rol,
            permissions
        }
    }

}