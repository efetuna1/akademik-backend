import { Request, Response } from "express";
import { EgitimOgretimService } from "../services/eduService";

export const createFaaliyet = async(req: Request, res: Response) =>{
    try {
      const yeniEgitim = await EgitimOgretimService.create(req.body);
      res.status(201).json(yeniEgitim);
    } catch (error) {
      console.error("Eğitim oluşturulurken hata:", error);
      res.status(500).json({ error: "Eğitim kaydı oluşturulamadı." });
    }
  };
