import type { NextFunction, Request, Response } from "express";
import { AppException } from "../shared/errors/handler.error.ts";
import { ERROR_RESPONSE_CODE } from "../shared/errors/error.response.code.ts";
import { Security } from "../shared/security.ts";
import { envConfig } from "../config/env/env.config.ts";

export const authMiddleware = ( req: Request, res: Response , next: NextFunction ) =>{
    try {

        const authorization = req.headers.authorization;
        
        if(!authorization){
            
            throw new AppException(
                401, ERROR_RESPONSE_CODE.ERROR_TOKEN_REQUIRED, "Token es requerido" 
            );

        }

        const [type , token ] = authorization.split(" ");

        if(type !== "Bearer" || !token ){

            throw new AppException(
                401, ERROR_RESPONSE_CODE.ERROR_TOKEN_REQUIRED, "Token es requerido" 
            );

        };

        const payload = Security.verifyToken( token, envConfig.jwtSecretAccessToken as string );
        
        next();

    } catch (error) {

        next( error );
        
    }
}