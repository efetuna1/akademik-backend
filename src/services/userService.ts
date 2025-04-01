import { IdentityService } from "./soapService";
import  prisma  from "../utils/prisma"; 

export class UserService {
  static async registerUser(tcKimlikNo: string, ad: string, soyad: string, dogumYili: number, parola: string) {
    const isVerified = await IdentityService.verifyIdentity(tcKimlikNo, ad, soyad, dogumYili);

    if (!isVerified) {
      throw new Error("Kimlik doğrulama başarısız! Kayıt yapılamadı.");
    }
    const user = await prisma.kullanici.create({
      data: { tcKimlikNo, ad, soyad, parola },
    });

    return user;
  }
}
