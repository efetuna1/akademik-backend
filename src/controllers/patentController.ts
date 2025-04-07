// controllers/patentlerController.ts
import { Request, Response } from 'express';
import { PatentlerService } from '../services/patentService';

export const createPatent = async (req: Request, res: Response) => {
  const { kullaniciId, patentAdi, patentTuru, yil, puan } = req.body;

  try {
    const patent = await PatentlerService.create({
      kullaniciId,
      patentAdi,
      patentTuru,
      yil,
      puan,
    });

    res.status(201).json({
      message: 'Patent başarıyla eklendi.',
      patent,
    });
  } catch (error) {
    res.status(500).json({ message: `Bir hata oluştu: ${error.message}` });
  }
};
