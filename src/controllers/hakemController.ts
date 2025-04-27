import { Request, Response } from "express";
import { EditorlukFaaliyetleriService } from "../services/hakemService";
import { EditorlukTuru } from "@prisma/client";

export const createHakem = async (req: Request, res: Response) => {
  try {
    const { kullaniciId, dergiAdi, editTuru, yil, puan } = req.body;

    if (!kullaniciId || !dergiAdi || !editTuru || !yil) {
      res.status(400).json({ message: "Zorunlu alanlar eksik." });
    }

    const yeniKayit = await EditorlukFaaliyetleriService.create({
      kullaniciId,
      dergiAdi,
      editTuru: editTuru as EditorlukTuru,
      yil,
      puan,
    });

    res.status(201).json({ message: "Editörlük faaliyeti eklendi.", data: yeniKayit });
  } catch (error) {
    console.error("Ekleme hatası:", error);
    res.status(500).json({ message: "Sunucu hatası oluştu." });
  }
};
