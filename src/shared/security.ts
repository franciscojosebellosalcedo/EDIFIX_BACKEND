import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { envConfig } from "../config/env/env.config.ts";
import { AppException } from "./errors/handler.error.ts";
import { ERROR_RESPONSE_CODE } from "./errors/error.response.code.ts";
import type { TDataAccessToken } from "../modules/auth/types/auth.type.ts";

export class Security {

    public static hasPassword = ( password: string ) => {
        return bcrypt.hashSync( password, 10 );
    }

    public static comparePassword = ( password: string, passwordHash: string ) => {
        return bcrypt.compareSync( password , passwordHash );
    }

    public static getToken = ( payload: TDataAccessToken, secret: string ) => {
        return jwt.sign(payload, secret );
    }

    public static verifyToken = ( token: string, secret: string ) => {
        try {

            const payload = jwt.verify( token , secret );
            return payload;
            
        } catch (error) {
            
            throw new AppException(
                401, ERROR_RESPONSE_CODE.ERROR_NOT_AUTHORIZED , "No autorizado" 
            );

        }
    }
}