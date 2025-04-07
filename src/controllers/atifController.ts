import { Request, Response } from "express";
import { AtiflarService } from "../services/atifService";

export const createAtif = async (req: Request, res: Response)=> {
    try {
      const { kullaniciId, atifYapanEser, atifSayisi, indeks, puan } = req.body;

      const created = await AtiflarService.create({
        kullaniciId,
        atifYapanEser,
        atifSayisi,
        indeks,
        puan
      });

      res.status(201).json(created);
    } catch (error) {
      console.error("Atıf ekleme hatası:", error);
      res.status(500).json({ error: "Atıf eklenemedi." });
    }
  };