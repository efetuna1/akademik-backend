import { Router } from "express";
import { createUserController, loginUserControler } from "../controllers/userController";
import { ilanOlustur } from "../controllers/ilanController";
import { createMakale } from "../controllers/makaleController";
import { createToplanti } from "../controllers/toplantıController";
const router = Router();

router.get("/test", (req, res)=>{
    res.send("Hello");
})

router.post("/register",createUserController );
router.post("/login",loginUserControler );
router.post("/ilanlar", ilanOlustur); 
router.post("/makaleEkle", createMakale);
router.post("/toplantiEkle", createToplanti);

export default router;