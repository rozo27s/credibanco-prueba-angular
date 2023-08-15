import { Injectable } from '@angular/core';
import { EncryptService } from './encrypt.service';



/**
 * Servicio de para la gestión del almacenamiento y consulta a través del local-storage
 */
@Injectable({ providedIn: 'root' })
export class StorageService {
  constructor(private crypt: EncryptService) { }

  /**
   * Permite almacenar un parámetro en el local-storage usando la estrategia llave-valor
   * @param key Llave para almacenar un valor en el local-storage
   * @param value Valor que se desea almacenar en el local-storage
   */
  setLocalStorage(key: string, value: string) {
    localStorage.setItem(key, this.crypt.encrypt(value));
  }

  /**
   * Permite obtener un objeto a través de su llave de almacenamiento
   * @param key Llave para obtener mediante el Local-Storage me
   * @returns Objeto almacenado en el local-storage
   */
  getLocalStorage(key: string) {
    return this.crypt.decrypt(localStorage.getItem(key));
  }

  /**
   * Permite almacenar objetos sobre el sesion-storage del navegador, mediante llave-valor
   * (Cuando esté activa las llaves de cifrado y descifrado, esta información será cifrada)
   * @param key llave con la cual se guarda en el session-storage
   * @param value Valor que se desea guardar en el session-storage
   */
  setSessionStorage(key: string, value: string) {
    sessionStorage.setItem(key, this.crypt.encrypt(value));
  }

  /**
   * Permite consultar la sesión almacenada en el Storage del navegador
   * @param key llave para consultar la sesión
   * @returns 
   */
  getSessionStorage(key: string) {
    return this.crypt.decrypt(sessionStorage.getItem(key))
  }

  /**
   * Permite la limpieza total de objetos almacenados en el sesionStorage
   */
  clearStorage() {
    localStorage.clear();
  }

}