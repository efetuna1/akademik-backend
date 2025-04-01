import { Router } from "express";
import { UserController } from "../controllers/userController";
const router = Router();

router.get("/test", (req, res)=>{
    res.send("Hello");
})

router.post("/register", UserController.register);

export default router;