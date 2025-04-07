// controllers/toplantiController.ts
import { Request, Response } from 'express';
import { addToplanti } from '../services/toplantiService';
import { EtkinlikTuru } from '@prisma/client';

export const createToplanti = async (req: Request, res: Response) => {
  const {
    kullaniciId,
    konferansAdi,
    bildiriAdi,
    etkinlikTuru,
    sayfaSayisi,
    tarih,
    yer,
    puan
  }: {
    kullaniciId: number;
    konferansAdi?: string;
    bildiriAdi?: string;
    etkinlikTuru: EtkinlikTuru;
    sayfaSayisi?: number;
    tarih: Date;
    yer?: string;
    puan?: number;
  } = req.body;

  try {
    const yeniToplanti = await addToplanti({
      kullaniciId,
      konferansAdi,
      bildiriAdi,
      etkinlikTuru,
      sayfaSayisi,
      tarih: new Date(tarih),
      yer,
      puan,
    });

    res.status(201).json({ message: 'Toplantı başarıyla eklendi.', toplantı: yeniToplanti });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
