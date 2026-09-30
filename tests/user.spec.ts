import { describe, expect, it } from "vitest";
import request from "supertest";
import app from "../src/app";
import { appConfig } from "../src/config/app.config";
import { UserEntity } from "../src/modules/settings/users/domain/entities/user.entity";
import { testContext } from "./test.context";

describe("POST - Crear usuario", ()=>{

    it("Debe crear usuario 'test'", async () => {

        const response = await request( app )
            .post( appConfig.prefix + "/users")
            .set("Authorization", `Bearer ${testContext.accessToken}`)
            .send({
                usua_Nombre: "Test",
                usua_NombreUsuario: "test",
                usua_Contrasenia: "test",
                usua_RolId: 1
            });
        
        const data: UserEntity = response.body.data;

        expect( response.statusCode ).toBe( 201 );

        expect( data.usua_Nombre ).toBe("Test");

    });

})