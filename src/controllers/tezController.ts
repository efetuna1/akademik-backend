// controllers/tezYoneticiligiController.ts
import { Request, Response } from 'express';
import { TezYoneticiligiService } from '../services/tezService';

export const createTez = async (req: Request, res: Response) => {
  const { kullaniciId, ogrenciAdi, tezAdi, enstitu, yil, tezTuru, puan } = req.body;

  try {
    const tez = await TezYoneticiligiService.create({
      kullaniciId,
      ogrenciAdi,
      tezAdi,
      enstitu,
      yil,
      tezTuru,
      puan,
    });

    res.status(201).json({
      message: 'Tez Yöneticiliği başarıyla eklendi.',
      tez,
    });
  } catch (error) {
    res.status(500).json({ message: `Bir hata oluştu: ${error.message}` });
  }
};
