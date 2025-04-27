// controllers/makaleController.ts
import { Request, Response } from 'express';
import { addMakale } from '../services/makaleService';
import { IndeksTuru } from '@prisma/client';

export const createMakale = async (req: Request, res: Response) => {
  const {
    kullaniciId,
    yayinAdi,
    dergiAdi,
    ciltNo,
    sayfaNo,
    yil,
    indeksTuru,
    puan
  }: {
    kullaniciId: number;
    yayinAdi: string;
    dergiAdi: string;
    ciltNo: string | null;
    sayfaNo: string | null;
    yil: number;
    indeksTuru: IndeksTuru;
    puan;
  } = req.body;

  try {
    const newMakale = await addMakale(kullaniciId, yayinAdi, dergiAdi, ciltNo, sayfaNo, yil, indeksTuru, puan);
    res.status(201).json({ message: 'Makale başarıyla eklendi.', makale: newMakale });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
