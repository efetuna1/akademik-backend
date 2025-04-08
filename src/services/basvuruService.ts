import { PrismaClient, BasvuruDurum } from '@prisma/client';

const prisma = new PrismaClient();

export const BasvurularService = {
  async create(data: {
    kullaniciId: number;
    ilanId: number;
    durum?: BasvuruDurum;
  }) {
    return await prisma.basvurular.create({
      data: {
        ...data,
        durum: data.durum ?? BasvuruDurum.BEKLIYOR,
      },
    });
  }
};
