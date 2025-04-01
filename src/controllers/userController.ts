import { Request, Response } from "express";
import { UserService } from "../services/userService";

export class UserController {
  static async register(req: Request, res: Response) {
    try {
      const { tcKimlikNo, ad, soyad, dogumYili, parola } = req.body;

      if (!tcKimlikNo || !ad || !soyad ||!dogumYili ) {
        res.status(400).json({ message: "Tüm alanlar gereklidir!" });
      }

      const user = await UserService.registerUser(tcKimlikNo, ad, soyad, dogumYili, parola);
      res.status(201).json({ message: "Kullanıcı başarıyla kaydedildi!", user });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
