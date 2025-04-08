import { Request, Response } from 'express';
import { IlanlarService } from '../services/ilanService';

export const createIlan = async (req: Request, res: Response) => {
  const {
    baslik,
    aciklama,
    kadro,
    baslangicTarihi,
    bitisTarihi,
    kriterler,
    durum
  } = req.body;

  try {
    const ilan = await IlanlarService.create({
      baslik,
      aciklama,
      kadro,
      baslangicTarihi: new Date(baslangicTarihi),
      bitisTarihi: new Date(bitisTarihi),
      kriterler,
      durum
    });

    res.status(201).json({
      message: 'İlan başarıyla oluşturuldu.',
      ilan
    });
  } catch (error) {
    res.status(500).json({ message: `Bir hata oluştu: ${error.message}` });
  }
};
