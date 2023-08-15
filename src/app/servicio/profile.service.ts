import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  //==================================================================CONSTRUCTOR
  constructor(private http: HttpClient) {
  }

  getLogin(credentials: any): Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/login', credentials, httpOptions);
  }

  getProfilesHint(hint: any): Observable<any> {
    return this.http.get<any>(environment.apiUrl + '/profile?hint=' + hint,httpOptions);
  }

  newProfile(profile: any): Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/profile', profile, httpOptions);
  }

  rememberPass(data: any): Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/login/remember-pass', data, httpOptions);
  }
}
