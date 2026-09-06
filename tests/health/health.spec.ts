import request from "supertest";
import { it, describe, expect } from "vitest";
import app from "../../src/app";
import { appConfig } from "../../src/config/app.config";

describe("GET health API", ()=>{

    it("Debe responder con status code 200", async ()=>{

        const response = await request(app).get(appConfig.prefix + "/health");

        expect( response.statusCode ).toBe( 200 );

    })
})