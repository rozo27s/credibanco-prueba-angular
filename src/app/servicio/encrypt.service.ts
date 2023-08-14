import { Injectable } from '@angular/core';
import * as crypto from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  secretKey = "#$4aCt345#.43454%+%2sSDf2+3&-3fdc43";
  constructor() { }


  /**
   * Permite cifrar un texto basado en el algoritmo AES-32
   * TODO: se debe aplicar algún algoritmo de cifrado real
   * @param text Texto a cifrar
   * @returns 
   */
  encrypt(text: string): string {
    return btoa(text);
  }

  /**
   * Permite descifrar un texto previamente cifrado usando el método de cifrar
   * TODO: se debe aplicar algún algoritmo de cifrado real
   * @param text Texto a des-cifrar
   * @returns 
   */
  decrypt(text: string | null): string {

    return text ? atob(text) : "";
  }

  /**
   * Aplica una llave hash de encripción
   * @param word 
   * @returns 
   */
  encryptSha256(word: string): string {
    return crypto.SHA256(word).toString();
  }
}

