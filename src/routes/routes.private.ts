import { Router } from "express";
import userRouter from "../modules/settings/users/presentation/routes/user.router.ts";

const router = Router();

router.use("/users", userRouter );

export default router;