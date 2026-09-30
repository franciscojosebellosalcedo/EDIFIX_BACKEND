import type { Request } from "express";
import type { UserEntityDB } from "../../modules/settings/users/infraestructure/database/user.entity.db.ts";

export const getCurrentUser = ( req: Request ): UserEntityDB => req.context.user;