import { Request, Response } from "express";
import { GorevService } from "../services/gorevService";

export const createGorev = async (req: Request, res: Response) => {
  try {
    const { kullaniciId, gorevAdi, gorevTuru, baslamaTarihi, bitisTarihi, sure, puan } = req.body;

    const newGorev = await GorevService.create({
      kullaniciId,
      gorevAdi,
      gorevTuru,
      baslamaTarihi: new Date(baslamaTarihi),
      bitisTarihi: new Date(bitisTarihi),
      sure,
      puan,
    });

    res.status(201).json({ 
      message: "İdari görev başarıyla oluşturuldu.", 
      idariGorev: newGorev 
    });
  } catch (error) {
    console.error("Ekleme hatası:", error);
    res.status(400).json({ 
      message: "İdari görev eklenirken bir hata oluştu.", 
      error: error instanceof Error ? error.message : "Bilinmeyen bir hata oluştu." 
    });
  }
};
