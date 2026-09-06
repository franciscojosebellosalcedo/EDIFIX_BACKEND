import { container } from "tsyringe";
import { LoginUseCase } from "../application/login.use.case.js";
import { AUTH_TOKENS } from "../container/auth.container.tokens.ts";
import { AuthController } from "../presentation/controller/auth.controller.ts";
import { RefressSessionUseCase } from "../application/refress.session.use.case.js";

container.register<LoginUseCase>(
    AUTH_TOKENS.LOGIN_USE_CASE,
    {
        useClass: LoginUseCase
    }
)

container.register<AuthController>(
    AUTH_TOKENS.CONTROLLER,
    {
        useClass: AuthController
    }
)

container.register<RefressSessionUseCase>(
    AUTH_TOKENS.REFRESS_SESSION,
    {
        useClass: RefressSessionUseCase
    }
)