import { PrismaClient, AtifTuru } from "@prisma/client";

const prisma = new PrismaClient();

export const AtiflarService = {
  async create(data: {
    kullaniciId: number;
    atifYapanEser: string;
    atifSayisi?: number;
    indeks: AtifTuru;
    puan?: number;
  }) {
    return await prisma.atiflar.create({ data });
  }
};