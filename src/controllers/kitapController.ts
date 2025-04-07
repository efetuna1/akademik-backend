import { Request, Response } from "express";
import { KitaplarService } from "../services/kitapService";

export const createKitap = async (req: Request, res: Response)=>{
    try {
      const kitap = await KitaplarService.create(req.body);
      res.status(201).json(kitap);
    } catch (error) {
      console.error("Kitap oluşturulurken hata:", error);
      res.status(500).json({ error: "Kitap kaydı oluşturulamadı." });
    }
  };
