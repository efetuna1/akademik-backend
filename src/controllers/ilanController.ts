// controllers/ilanController.ts
import { Request, Response } from "express";
import { createIlan } from "../services/ilanService";

export const ilanOlustur = async (req: Request, res: Response) => {
  const { baslik, aciklama, kadro, baslangicTarihi, bitisTarihi, kriterler } = req.body;

  if (!baslik || !aciklama || !kadro || !baslangicTarihi || !bitisTarihi || !kriterler) {
    res.status(400).json({ message: "Tüm alanlar zorunludur" });
  }

  try {
    const yeniIlan = await createIlan({
      baslik,
      aciklama,
      kadro,
      baslangicTarihi: new Date(baslangicTarihi),
      bitisTarihi: new Date(bitisTarihi),
      kriterler,
    });

    res.status(201).json(yeniIlan);
  } catch (error) {
    console.error("İlan oluşturulamadı:", error);
    res.status(500).json({ message: "Sunucu hatası" });
  }
};
