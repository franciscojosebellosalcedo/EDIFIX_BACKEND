import { inject, injectable } from "tsyringe";
import type { UserRepository } from "../domain/repositories/user.repository.ts";
import { USER_TOKENS } from "../container/user.container.tokens.ts";
import type { TCreateUser } from "../types/user.type.ts";
import { AppException } from "../../../../shared/errors/handler.error.ts";
import { USER_RESPONSE_CODE } from "../../../../shared/reseponse/user.response.code.ts";
import { Security } from "../../../../shared/security.ts";

@injectable()
export class CreateUserUseCase {

    constructor(
        @inject( USER_TOKENS.REPOSITORY )
        private readonly userRepository: UserRepository
    ){

    }

    async execute( values: TCreateUser ){

        const exist = await this.userRepository.findByNameUser( values.usua_NombreUsuario );

        if(exist){
            throw new AppException( 400, USER_RESPONSE_CODE.USER_EXIST, "Usuario ya existente");
        }

        const passwordHash = Security.hasPassword( values.usua_Contrasenia );

        values.usua_Contrasenia = passwordHash;

        return await this.userRepository.create(values);
    }
}