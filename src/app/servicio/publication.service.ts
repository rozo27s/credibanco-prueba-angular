import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};


@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  
  private publication: string = '/publication';
  private reaction: string = '/reaction';
  private comment: string = '/comment';

  constructor(private http: HttpClient) {
  }

  newPublication(publication: any): Observable<any> {
    return this.http.post<any>(environment.apiUrl + this.publication, publication, httpOptions);
  }

  updatePublication(publication: any): Observable<any> {
    return this.http.put<any>(environment.apiUrl + this.publication, publication, httpOptions);
  }

  deletePublication(id: any): Observable<any> {
    return this.http.delete<any>(environment.apiUrl + this.publication + "/" + id, httpOptions);
  }

  getPublications(id: any): Observable<any> {
    return this.http.get<any>(environment.apiUrl + this.publication + '?idProfile=' + id, httpOptions);
  }

  newReaction(reaction: any): Observable<any> {
    return this.http.post<any>(environment.apiUrl + this.reaction, reaction, httpOptions);
  }

  newComment(comment: any): Observable<any> {
    return this.http.post<any>(environment.apiUrl + this.comment, comment, httpOptions);
  }
}
