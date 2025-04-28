import { Request, Response } from 'express';
import prisma from '../utils/prisma';

export const getJuriBasvurular = async (req: Request, res: Response) => {
  try {
    const basvurular = await prisma.basvurular.findMany({
      where: {
        durum: 'BEKLIYOR',  
      },
      include: {
        kullanici: true,    
        ilan: true,         
      },
    });

    res.status(200).json(basvurular);
  } catch (error) {
    console.error('Jüri başvuru listesi alınamadı:', error);
    res.status(500).json({ message: 'Başvurular getirilemedi.' });
  }
};


