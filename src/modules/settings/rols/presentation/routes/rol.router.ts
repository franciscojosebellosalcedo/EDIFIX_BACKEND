import { Router } from "express";
import { authMiddleware } from "../../../../../middleware/auth.middleware.ts";
import { handlerAsync } from "../../../../../shared/errors/handler.async.ts";
import { container } from "tsyringe";
import type { RolController } from "../controller/rol.controller.ts";
import { ROL_TOKENS } from "../../container/rol.tokens.ts";

const rolController = container.resolve<RolController>( ROL_TOKENS.CONTROLLER );

const router = Router();

router.post("/", authMiddleware, handlerAsync( rolController.create) );

router.get("/paginate", authMiddleware, handlerAsync( rolController.paginate ) );

router.get("/:id", authMiddleware, handlerAsync( rolController.getRolById) );

export default router;