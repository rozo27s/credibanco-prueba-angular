import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Usuario } from '../modelo/Usuario';
import { of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  private usuarioUrl: string = '/service-api-rest/api';

  //==================================================================CONSTRUCTOR
  constructor(private http: HttpClient) {

  }

  //======================================================================================
  //==============================METODOS OBSERVABLES=====================================
  //======================================================================================

  getLogin(credentials: any): Observable<Usuario[]> {
    return this.http.post<any>(this.usuarioUrl + '/login', credentials, httpOptions);
  }

  newProfile(profile: any): Observable<any> {
    return this.http.post<any>(this.usuarioUrl + '/profile', profile, httpOptions);
  }

  rememberPass(data: any): Observable<any> {
    return this.http.post<any>(this.usuarioUrl + '/login/remember-pass', data, httpOptions);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error('error');
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('UserService: ' + message);
  }
}
