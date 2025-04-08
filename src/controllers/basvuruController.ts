import { Request, Response } from 'express';
import { BasvurularService } from '../services/basvuruService';

export const basvuruYap = async (req: Request, res: Response) => {
  const { kullaniciId, ilanId } = req.body;

  if (!kullaniciId || !ilanId) {
    res.status(400).json({ message: 'kullaniciId ve ilanId zorunludur.' });
  }

  try {
    const yeniBasvuru = await BasvurularService.create({
      kullaniciId,
      ilanId,
    });

    res.status(201).json({
      message: 'Başvuru başarıyla yapıldı.',
      basvuru: yeniBasvuru,
    });
  } catch (error) {
    res.status(500).json({ message: `Hata: ${error.message}` });
  }
};
