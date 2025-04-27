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
import { basvuruYap } from "../controllers/basvuruController";
import { createProje } from "../controllers/projeController";
import { createHakem } from "../controllers/hakemController";
import { createOdul } from "../controllers/odulController";
import { createGorev } from "../controllers/gorevController";
import { createSanat } from "../controllers/sanatController";
import { getIlanlar } from "../controllers/ilanController";
import { getTotalPuan } from "../controllers/toplamPuanlama";


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
router.post("/projeEkle", createProje);
router.post("/sanatEkle", createSanat);
router.post("/gorevEkle", createGorev);
router.post("/hakemEkle", createHakem);
router.post("/odulEkle", createOdul);

router.post("/basvuruYap", basvuruYap);
router.get("/ilanGetir", getIlanlar);
router.get("/toplamPuan", getTotalPuan);

export default router;