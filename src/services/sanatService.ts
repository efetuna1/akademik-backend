import { PrismaClient, GuzelSanatlarFaaliyetTuru } from "@prisma/client";

const prisma = new PrismaClient();

export const GuzelSanatlarFaaliyetleriService = {
  async create(data: {
    kullaniciId: number;
    faaliyetAdi: string;
    faaliyetTuru: GuzelSanatlarFaaliyetTuru;
    yil: number;
    puan?: number;
  }) {
    return await prisma.guzelSanatlarFaaliyetleri.create({ data });
  }
};
