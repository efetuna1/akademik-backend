import { Request, Response } from 'express';
import { getToplamPuan } from '../services/toplamPuan'; 
export const getTotalPuan = async (req: Request, res: Response) => {
  const { kullaniciId } = req.query; 

  if (!kullaniciId || Array.isArray(kullaniciId)) {
    res.status(400).json({ message: 'Geçersiz kullanıcı ID\'si' });
  }

  try {
    const totalPuan = await getToplamPuan(Number(kullaniciId));

    res.status(200).json({
      message: 'Toplam puan başarıyla alındı.',
      totalPuan
    });
  } catch (error) {
    console.error("Puanları toplarken hata oluştu:", error);
    res.status(500).json({ message: `Puanlar hesaplanırken bir hata oluştu: ${error.message}` });
  }
};
