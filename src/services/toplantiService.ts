// services/toplantiService.ts
import { PrismaClient, EtkinlikTuru } from '@prisma/client';

const prisma = new PrismaClient();

interface ToplantiInput {
  kullaniciId: number;
  konferansAdi?: string;
  bildiriAdi?: string;
  etkinlikTuru: EtkinlikTuru;
  sayfaSayisi?: number;
  tarih: Date;
  yer?: string;
  puan?: number;
}

export const addToplanti = async (input: ToplantiInput) => {
  try {
    // Kullanıcı kontrolü
    const kullanici = await prisma.kullanici.findUnique({
      where: { id: input.kullaniciId }
    });

    if (!kullanici) {
      throw new Error('Geçerli bir kullanıcı bulunamadı.');
    }

    // Toplantı ekleme işlemi
    const yeniToplanti = await prisma.bilimselToplantilar.create({
      data: {
        kullaniciId: input.kullaniciId,
        konferansAdi: input.konferansAdi,
        bildiriAdi: input.bildiriAdi,
        etkinlikTuru: input.etkinlikTuru,
        sayfaSayisi: input.sayfaSayisi,
        tarih: input.tarih,
        yer: input.yer,
        puan: input.puan
      }
    });

    return yeniToplanti;
  } catch (error: any) {
    throw new Error(`Toplantı eklenirken bir hata oluştu: ${error.message}`);
  }
};
