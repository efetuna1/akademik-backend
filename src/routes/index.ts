import { Router } from "express";
import { createUserController, loginUserControler } from "../controllers/userController";
import { ilanOlustur } from "../controllers/ilanController";

const router = Router();

router.get("/test", (req, res)=>{
    res.send("Hello");
})

router.post("/register",createUserController );
router.post("/login",loginUserControler );
router.post("/ilanlar", ilanOlustur); 

export default router;