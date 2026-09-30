import { UserEntityDB } from "../modules/users/entities/UserEntityDB";

declare global {
    namespace Express {
        interface Request {
            context: {
                user: UserEntityDB | null;
            };
        }
    }
}

export {};