import { inject, injectable } from "tsyringe";
import type { CreateUserUseCase } from "../../application/create.user.use-case.ts";
import { USER_TOKENS } from "../../container/user.container.tokens.ts";
import type { Request, Response } from "express";
import type { TCreateUser } from "../../types/user.type.ts";
import { validateDTO } from "../../../../../shared/dto/validate.dto.ts";
import { CreateUserDTO } from "../dto/create.user.dto.ts";
import { responseHttp } from "../../../../../shared/reseponse/handler.response.ts";
import { USER_RESPONSE_CODE } from "../../../../../shared/reseponse/user.response.code.ts";

@injectable()
export class UserController {

    constructor(
        @inject( USER_TOKENS.CREATE_USE_CASE )
        private readonly createUserUseCase: CreateUserUseCase
    ){

    }

    create = async ( req: Request, res: Response ) => {

        const body: TCreateUser = req.body;

        const dto = await validateDTO( CreateUserDTO , body );

        const result = await this.createUserUseCase.execute({
            usua_Nombre: dto.usua_Nombre,
            usua_NombreUsuario: dto.usua_NombreUsuario,
            usua_Contrasenia: dto.usua_Contrasenia,
            usua_CreacionId: 1,
            usua_RolId: dto.usua_RolId
        });

        return res.status( 201 ).json( 
            responseHttp( 201, USER_RESPONSE_CODE.USER_CREATED, true, "Usuario creado", result ) 
        );

    }
}