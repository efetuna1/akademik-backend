import { Router } from "express";
import { createIlan } from "../controllers/ilanController";
import { basvuruYap } from "../controllers/basvuruController";
import { createProje } from "../controllers/projeController";
import { createHakem } from "../controllers/hakemController";
import { createOdul } from "../controllers/odulController";
import { createGorev } from "../controllers/gorevController";
import { createSanat } from "../controllers/sanatController";
import { getIlanlar } from "../controllers/ilanController";
import { getTotalPuan } from "../controllers/toplamPuanlama";
import { getJuriBasvurular } from "../controllers/juriController";
import { validateIdentityController } from "../controllers/tcVerifyController";


const router = Router();

router.get("/test", (req, res) => {
    res.send("Hello");
})

router.post("/register", createUserController);
router.post("/login", loginUserControler);
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
router.post("/kimlikDogrula", validateIdentityController);

router.post("/basvuruYap", basvuruYap);

router.get("/ilanGetir", getIlanlar);
router.get("/toplamPuan", getTotalPuan);
router.get("/juriBasvuru", getJuriBasvurular);

export default router;