import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UserService {
  static async assignJuryToJobPost(tcKimlikNo: string, jobPostId: number) {
    try {
      const user = await prisma.kullanici.findUnique({
        where: { tcKimlikNo: tcKimlikNo },
      });

      if (!user) {
        throw new Error("Kullanıcı bulunamadı");
      }

      const updatedUser = await prisma.kullanici.update({
        where: { tcKimlikNo: tcKimlikNo },
        data: { role: 'JURI_UYESI' },
      });

      const jobPost = await prisma.ilanlar.update({
        where: { id: jobPostId },
        data: {
          juri: {
            connect: { id: updatedUser.id }, 
          },
        },
      });

      return { updatedUser, jobPost };
    } catch (error) {
      throw new Error("Jüri atama sırasında hata oluştu: " + error.message);
    }
  }
}