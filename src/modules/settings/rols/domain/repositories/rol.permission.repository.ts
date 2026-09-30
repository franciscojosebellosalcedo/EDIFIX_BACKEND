import type { TCreateRolPermission } from "../../types/rol.type.ts";
import type { RolPermissionEntity } from "../entities/rol.permission.entity.ts";

export abstract class RolPermissionRepository {

    abstract create(permissions: TCreateRolPermission[]): Promise<RolPermissionEntity[]>;

    abstract findByIdRol(idRol: number): Promise<RolPermissionEntity[]>;

}