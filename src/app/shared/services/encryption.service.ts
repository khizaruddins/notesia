import { Injectable } from "@angular/core";
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  private adminName: string = 'khizaruddins';

  constructor() {}

  encryptData(data: string): string {
    const encrypted = CryptoJS.TripleDES.encrypt(data, this.adminName);
    return encrypted.toString();
  }

  decryptData(encryptedData: string): string {
    const decrypted = CryptoJS.TripleDES.decrypt(encryptedData, this.adminName);
    return decrypted.toString(CryptoJS.enc.Utf8);
  }


}