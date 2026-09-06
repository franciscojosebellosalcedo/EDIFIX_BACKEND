import { Router } from "express";
import { container } from "tsyringe";
import { USER_TOKENS } from "../../container/user.container.tokens.ts";
import type { UserController } from "../controller/user.controller.ts";
import { handlerAsync } from "../../../../../shared/errors/handler.async.ts";

const controller = container.resolve<UserController>( USER_TOKENS.CONTROLLER );

const router = Router();

router.post("/", handlerAsync( controller.create ) );

export default router;