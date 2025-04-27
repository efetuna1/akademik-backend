import { Request, Response } from "express";
import { OdullerService } from "../services/odulService";


export const createOdul =  async (req: Request, res: Response) =>{
    const { kullaniciId, odulAdi, odulTuru, yil, puan } = req.body;

    try {
      const newOdul = await OdullerService.create({
        kullaniciId,
        odulAdi,
        odulTuru,
        yil,
        puan,
      });

      res.status(201).json({
        message: "Ödül başarıyla eklendi.",
        data: newOdul,
      });
    } catch (error) {
      console.error("Ödül eklenirken hata oluştu:", error);
      res.status(500).json({
        message: "Ödül eklenirken bir hata oluştu.",
        error: error.message,
      });
    }
  }

