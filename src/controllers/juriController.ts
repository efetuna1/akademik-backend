import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Jüriye ait başvuruları getir
export const getJuriBasvurular = async (req, res) => {
  const { juriId } = req.params; // Jüri kimliği

  try {
    const basvurular = await prisma.basvurular.findMany({
      where: {
        ilan: {
          juri: {
            some: {
              id: Number(juriId), // Jüriye atanmış ilan başvuruları
            },
          },
        },
      },
      include: {
        kullanici: true,
        ilan: true,
      },
    });
    res.status(200).json(basvurular); // Başvuruları geri döndür
  } catch (error) {
    res.status(500).json({ message: 'Başvurular alınamadı.' });
  }
};

// Başvuruyu değerlendirme işlemi
export const updateBasvuruDurum = async (req, res) => {
  const { basvuruId } = req.params;
  const { durum } = req.body; // Değerlendirilen durum (Örneğin, 'KABUL', 'REDDİ')

  try {
    const basvuru = await prisma.basvurular.update({
      where: { id: Number(basvuruId) },
      data: { durum },
    });

    res.status(200).json(basvuru); // Güncellenmiş başvuru bilgisini döndür
  } catch (error) {
    res.status(500).json({ message: 'Başvuru durumu güncellenemedi.' });
  }
};
