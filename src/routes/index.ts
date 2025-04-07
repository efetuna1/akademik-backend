import { Router } from "express";
import { createUserController, loginUserControler } from "../controllers/userController";
import { ilanOlustur } from "../controllers/ilanController";
import { createMakale } from "../controllers/makaleController";
import { createToplanti } from "../controllers/toplantıController";
import { createFaaliyet } from "../controllers/faaliyetController";
import { createKitap } from "../controllers/kitapController";
import { createAtif } from "../controllers/atifController";
import { createTez } from "../controllers/tezController";

const router = Router();

router.get("/test", (req, res)=>{
    res.send("Hello");
})

router.post("/register",createUserController );
router.post("/login",loginUserControler );
router.post("/ilanlar", ilanOlustur); 
router.post("/makaleEkle", createMakale);
router.post("/toplantiEkle", createToplanti);
router.post("/faaliyetEkle", createFaaliyet);
router.post("/kitapEkle", createKitap);
router.post("/atifEkle", createAtif);
router.post("/tezEkle", createTez);

export default router;