import request from "supertest";
import { container } from "tsyringe";
import { describe, expect, it } from "vitest";
import app from "../src/app";
import { appConfig } from "../src/config/app.config";
import { MENU_TOKENS } from "../src/modules/menu/container/menu.container.tokens";
import { MenuSeeder } from "../src/seeders/menu.seeder";
import { MENU_RESPONSE_CODE } from "../src/shared/reseponse/menu.response.code";
import { testContext } from "./test.context";

describe("GET - Obtener menu", () => {

    it("Status code 200", async () => {

        const seeder = container.resolve<MenuSeeder>(MENU_TOKENS.SEEDER);
        await seeder.execute();

        const response = await request(app)
            .get(appConfig.prefix + "/menu")
            .set("Authorization", `Bearer ${testContext.accessToken}`)

        expect(response.statusCode).toBe(200);

        expect(response.ok).toBe(true);

        expect(response.body.code).toBe(MENU_RESPONSE_CODE.MENU_FIND_SUCCESS);
        
        expect(response.body.data.length).toBeGreaterThan(0);

    });
})