import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Transaction } from '../modelo/Transaction';
import { Card } from '../modelo/Card';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceCardsService {
 
  
  environment = environment;
  private cardsUrl: string = environment.apiUrl + '/cards/find-card';
  private transactionUrl: string = environment.apiUrl + '/transactions/find-transaction';

  constructor(private http: HttpClient) { }

  getCards(): Observable<Card[]> {
    try {
      return this.http.get<Card[]>(this.cardsUrl).pipe(
        catchError(this.handleError('getCargos', []))
      );
    } catch (error:any) {
      throw new Error(error);
    }
  }

  getTransactions(): Observable<Transaction[]> {
    try {
      return this.http.get<Transaction[]>(this.transactionUrl).pipe(
        catchError(this.handleError('getCargos', []))
      );
    } catch (error:any) {
      throw new Error(error);
    }
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('UserService: ' + message);
  }

}
