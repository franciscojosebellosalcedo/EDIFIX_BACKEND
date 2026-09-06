import type { TCreateUser } from "../../types/user.type.ts";
import type { UserEntity } from "../entities/user.entity.ts";

export abstract class UserRepository {

    abstract create( values: TCreateUser ): Promise<UserEntity>;

    abstract findByNameUser( nameUser: string ): Promise<UserEntity | null>;

    abstract findById( id: number ): Promise<UserEntity | null>;

}