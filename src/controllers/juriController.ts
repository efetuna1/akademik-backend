// POST /api/juriBasvurular
import { Request, Response } from 'express';
import prisma from '../utils/prisma';
import jwt from 'jsonwebtoken';

export const getJuriBasvurular = async (req: Request, res: Response) => {
  const { userId } = req.query;  // Extract userId from query params

  if (!userId) {
    res.status(400).json({ message: 'User ID gerekli' });
    return;
  }

  try {
    const juri = await prisma.kullanici.findUnique({
      where: { id: Number(userId) },  // Use userId to fetch data
      include: {
        ilanlar: {
          include: {
            basvurular: {
              include: {
                kullanici: {
                  select: {
                    ad: true,
                    soyad: true,
                    tcKimlikNo: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!juri) {
      res.status(404).json({ message: 'Jüri bulunamadı' });
      return;
    }

    res.json({ ilanlar: juri.ilanlar });
  } catch (error) {
    console.error('Hata:', error);
    res.status(500).json({ message: 'Sunucu hatası' });
  }
};
// Başvuruyu değerlendirme işlemi
export const updateBasvuruDurum = async (req, res) => {
  const { basvuruId } = req.params;
  const { durum } = req.body; // Değerlendirilen durum (Örneğin, 'KABUL', 'REDDİ')

  try {
    const basvuru = await prisma.basvurular.update({
      where: { id: Number(basvuruId) },
      data: { durum },
    });

    res.status(200).json(basvuru); // Güncellenmiş başvuru bilgisini döndür
  } catch (error) {
    res.status(500).json({ message: 'Başvuru durumu güncellenemedi.' });
  }
};
