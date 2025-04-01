import axios from "axios";
import { parseStringPromise } from "xml2js";

export class IdentityService {
  static async verifyIdentity(tcKimlikNo: string, ad: string, soyad: string, dogumYili: number): Promise<boolean> {
    const soapXml = `
      <?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                     xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                     xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <TCKimlikNoDogrula xmlns="http://tckimlik.nvi.gov.tr/WS">
            <TCKimlikNo>${tcKimlikNo}</TCKimlikNo>
            <Ad>${ad.toUpperCase()}</Ad>
            <Soyad>${soyad.toUpperCase()}</Soyad>
            <DogumYili>${dogumYili}</DogumYili>
          </TCKimlikNoDogrula>
        </soap:Body>
      </soap:Envelope>
    `;

    try {
      const response = await axios.post("https://tckimlik.nvi.gov.tr/service/kpspublic.asmx", soapXml, {
        headers: {
          "Content-Type": "text/xml; charset=utf-8",
          "SOAPAction": "http://tckimlik.nvi.gov.tr/WS/TCKimlikNoDogrula",
        },
      });

      const parsedResponse = await parseStringPromise(response.data);
      const result = parsedResponse["soap:Envelope"]["soap:Body"][0]["TCKimlikNoDogrulaResponse"][0]["TCKimlikNoDogrulaResult"][0];

      return result === "true";
    } catch (error) {
      console.error("TC Kimlik Doğrulama Hatası:", error);
      return false;
    }
  }
}
