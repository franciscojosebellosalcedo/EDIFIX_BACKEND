import { describe, expect, it } from "vitest";
import request from "supertest";
import app from "../src/app";
import { appConfig } from "../src/config/app.config";
import { AUTH_RESPONSE_CODE } from "../src/shared/reseponse/auth.response.code";

describe("POST - Login", ()=>{

    it("Login", async () =>{

        const response = await request( app )
            .post( appConfig.prefix + "/auth/login")
            .send({
                usua_NombreUsuario: "admin",
                usua_Contrasenia: "admin2024"
            })
        
        expect( response.statusCode ).toBe( 200 );

        expect( response.body.ok ).toBe(true);

        expect( response.body.code ).toBe(AUTH_RESPONSE_CODE.AUTH_LOGIN_SUCCESS);

    });

});