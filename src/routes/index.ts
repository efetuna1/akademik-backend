import { Router } from "express";
import { createUserController, loginUserControler } from "../controllers/userController";

const router = Router();

router.get("/test", (req, res)=>{
    res.send("Hello");
})

router.post("/register",createUserController );
router.post("/login",loginUserControler );

export default router;