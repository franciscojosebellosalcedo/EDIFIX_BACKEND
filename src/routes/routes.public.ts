import { Router, type Response } from "express";
import authRouter from "../modules/auth/presentation/routes/auth.router.ts";

const router = Router();

router.get("/health", (_, res: Response )=>{
    
    res.status(200).json({
        message: "EDIFIX API"
    });

})

router.use("/auth", authRouter );

export default router;