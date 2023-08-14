import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppAuthService {

  authModel: any = {};

  authModelResult: any = {};

  private keyToken: string = "";
  private keyUser: string = "";
  private bandera: string = "";

  loginResouce: string = "";
  constructor(private http: HttpClient,
    private ss: StorageService,
    private router: Router
  ) {
    this.keyToken = environment.keyToken;
    this.keyUser = environment.keyUser;
  }

  public getKeyToken():string{
    return this.keyToken;
  }

  /**
   * Esteblece el token en el localStorage
   * TODO: Si se va a manejar refreshToken, es mejor mantener el modelo completo de authModelResult
   *
   */
  public setToken(): void {
    if (this.authModelResult.accessToken) {
      this.ss.setLocalStorage(this.keyToken, JSON.stringify(this.authModelResult.accessToken))
    }
  }

  /**
   * establece el usario en el localStorage
   * TODO: La idea es almacenar el Usuario y no el idUsuario solamente
   */
  public setUser() {
    if (this.authModelResult.userId) {
      this.ss.setLocalStorage(this.keyUser, JSON.stringify(this.authModelResult.userId))
    }
  }

  /**
   * Obtiene el token
   */
  getToken(): string | null {
    const token = this.ss.getLocalStorage(this.keyToken);
    if (token) {
      return JSON.parse(token);
    }
    return null;
  }

  getBandera()
  {
    return localStorage.getItem(this.bandera);
  }

  /**
   * Obtiene el usuario
   */
  getUser(): any | null {
    const user = this.ss.getLocalStorage(this.keyUser);
    if (user) {
      return user;
    }
    return null;
  }

  logout() {
    localStorage.clear();
    this.ss.clearStorage();
    this.router.navigate(['login']);

  }

  /**
   * Conoce si el usuario está o no autenticado
   */
  isAuthenticated(): boolean {
    return this.ss.getLocalStorage(this.keyToken) ? true : false;
  }
}

