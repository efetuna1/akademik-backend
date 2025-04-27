import { PrismaClient, OdulTuru } from "@prisma/client";

const prisma = new PrismaClient();

export const OdullerService = {
  async create(data: {
    kullaniciId: number;
    odulAdi: string;
    odulTuru: OdulTuru;
    yil: number;
    puan?: number;
  }) {
    return await prisma.oduller.create({ data });

  },

};