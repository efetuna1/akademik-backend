import prisma from "../utils/prisma";

interface CreateIlanInput {
  baslik: string;
  aciklama: string;
  kadro: string; 
  baslangicTarihi: Date;
  bitisTarihi: Date;
  kriterler: string;
}

export const createIlan = async (data: CreateIlanInput) => {
  return await prisma.ilanlar.create({
    data: {
      baslik: data.baslik,
      aciklama: data.aciklama,
      kadro: data.kadro as any,
      baslangicTarihi: data.baslangicTarihi,
      bitisTarihi: data.bitisTarihi,
      kriterler: data.kriterler,
    },
  });
};
