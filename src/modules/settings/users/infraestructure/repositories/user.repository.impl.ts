import type { Repository } from "typeorm";
import type { UserEntity } from "../../domain/entities/user.entity.ts";
import type { UserRepository } from "../../domain/repositories/user.repository.ts";
import type { TCreateUser } from "../../types/user.type.ts";
import { inject, injectable } from "tsyringe";
import { USER_TOKENS } from "../../container/user.container.tokens.ts";

@injectable()
export class UserRepositoryImpl implements UserRepository {

    constructor(
        @inject(USER_TOKENS.REPOSITORY_DB)
        private readonly userRepositoryDB: Repository<UserEntity> 
    ){

    }

    async findById(id: number): Promise<UserEntity | null> {
        return await this.userRepositoryDB.findOneBy({ usua_Id: id });
    }

    async create(values: TCreateUser): Promise<UserEntity> {

        const newUser = this.userRepositoryDB.create( values );
        return await this.userRepositoryDB.save( newUser );

    }

    async findByNameUser(nameUser: string): Promise<UserEntity | null> {
        return await this.userRepositoryDB.findOneBy({ usua_NombreUsuario: nameUser });
    }
}