// services/makaleService.ts
import { PrismaClient, IndeksTuru } from '@prisma/client';

const prisma = new PrismaClient();

export const addMakale = async (
  kullaniciId: number,
  yayinAdi: string,
  dergiAdi: string,
  ciltNo: string | null,
  sayfaNo: string | null,
  yil: number,
  indeksTuru: IndeksTuru
) => {
  try {
    // Kullanıcıyı kontrol et
    const kullanici = await prisma.kullanici.findUnique({
      where: {
        id: kullaniciId
      }
    });

    if (!kullanici) {
      throw new Error('Geçerli bir kullanıcı bulunamadı.');
    }

    // Makale ekleme işlemi
    const newMakale = await prisma.makaleler.create({
      data: {
        kullaniciId,  // Kullanıcı ID'si ile ilişkilendirilmiş makale
        yayinAdi,
        dergiAdi,
        ciltNo,
        sayfaNo,
        yil,
        indeksTuru
      }
    });

    return newMakale;
  } catch (error) {
    throw new Error(`Makale eklenirken bir hata oluştu: ${error.message}`);
  }
};
