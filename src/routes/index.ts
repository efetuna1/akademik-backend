import { Router } from "express";
import { createUserController, loginUserControler } from "../controllers/userController";
import { createMakale } from "../controllers/makaleController";
import { createToplanti } from "../controllers/toplantıController";
import { createFaaliyet } from "../controllers/faaliyetController";
import { createKitap } from "../controllers/kitapController";
import { createAtif } from "../controllers/atifController";
import { createTez } from "../controllers/tezController";
import { createPatent } from "../controllers/patentController";
import { createIlan } from "../controllers/ilanController";

const router = Router();

router.get("/test", (req, res)=>{
    res.send("Hello");
})

router.post("/register",createUserController );
router.post("/login",loginUserControler );
router.post("/makaleEkle", createMakale);
router.post("/toplantiEkle", createToplanti);
router.post("/faaliyetEkle", createFaaliyet);
router.post("/kitapEkle", createKitap);
router.post("/atifEkle", createAtif);
router.post("/tezEkle", createTez);
router.post("/patentEkle", createPatent);
router.post("/ilanEkle", createIlan);

export default router;