import type { TPagination } from "../../../../../shared/types/pagination.type.ts";
import type { TCreateRol, TUpdateRol } from "../../types/rol.type.ts";
import type { RolEntity } from "../entities/rol.entity.ts";

export abstract class RolRepository {

    abstract create( values: TCreateRol ): Promise<RolEntity>;

    abstract paginate( page: number , limit: number ): Promise<TPagination<unknown>>;

    abstract update( id: number, values: TUpdateRol ): Promise<RolEntity | null>;

    abstract findById( id: number ): Promise<RolEntity | null>;

    abstract findByName( name: string ): Promise<RolEntity | null>;

    abstract findByCode( code: string ): Promise<RolEntity | null>;

}