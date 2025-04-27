import { Request, Response } from "express";
import { GuzelSanatlarFaaliyetleriService } from "../services/sanatService";

export const createSanat = async (req: Request, res: Response) => {
  try {
    const { kullaniciId, faaliyetAdi, faaliyetTuru, yil, puan } = req.body;

    const newFaaliyet = await GuzelSanatlarFaaliyetleriService.create({
      kullaniciId,
      faaliyetAdi,
      faaliyetTuru,
      yil,
      puan,
    });

    res.status(201).json({
      message: "Faaliyet başarıyla eklendi.",
      faaliyet: newFaaliyet,
    });
  } catch (error) {
    console.error("Ekleme hatası:", error);
    res.status(400).json({
      message: "Bir hata oluştu.",
      description: "Faaliyet eklenemedi.",
    });
  }
};
