import { Router } from "express";
import { handlerAsync } from "../../../../shared/errors/handler.async.ts";
import { container } from "tsyringe";
import type { AuthController } from "../controller/auth.controller.ts";
import { AUTH_TOKENS } from "../../container/auth.container.tokens.ts";

const controller = container.resolve<AuthController>( AUTH_TOKENS.CONTROLLER );

const router = Router();

router.post("/login", handlerAsync(controller.login ) );

router.post("/refress-session", handlerAsync(controller.refressSession ) );

export default router;