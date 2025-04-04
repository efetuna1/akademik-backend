import axios from 'axios';
import { parseStringPromise } from 'xml2js';

export const verifyTcKimlik = async (
  TCKimlikNo: string,
  Ad: string,
  Soyad: string,
  DogumYili: number
): Promise<boolean> => {
  const soapEnvelope = `
  <?xml version="1.0" encoding="utf-8"?>
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                   xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
    <soap12:Body>
      <TCKimlikNoDogrula xmlns="http://tckimlik.nvi.gov.tr/WS">
        <TCKimlikNo>${TCKimlikNo}</TCKimlikNo>
        <Ad>${Ad.toUpperCase()}</Ad>
        <Soyad>${Soyad.toUpperCase()}</Soyad>
        <DogumYili>${DogumYili}</DogumYili>
      </TCKimlikNoDogrula>
    </soap12:Body>
  </soap12:Envelope>
  `;

  const { data } = await axios.post(
    'https://tckimlik.nvi.gov.tr/Service/KPSPublic.asmx',
    soapEnvelope,
    {
      headers: {
        'Content-Type': 'application/soap+xml; charset=utf-8',
      },
    }
  );

  const result = await parseStringPromise(data);
  const isValid =
    result['soap:Envelope']?.['soap:Body']?.[0]?.['TCKimlikNoDogrulaResponse']?.[0]
      ?.TCKimlikNoDogrulaResult?.[0];

  return isValid === 'true';
};
