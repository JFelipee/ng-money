import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Transaction } from './transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://localhost:3000/transactions';

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.apiUrl, transaction).pipe(
      catchError(this.handleError)
    );
  }

  getTotalEntrada(): Observable<number> {
    return this.getTransactions().pipe(
      map(transactions =>
        transactions.filter(transaction => transaction.type === 'E')
                    .reduce((sum, transaction) => sum + transaction.amount, 0)
      )
    );
  }

  getTotalSaida(): Observable<number> {
    return this.getTransactions().pipe(
      map(transactions =>
        transactions.filter(transaction => transaction.type === 'S')
                    .reduce((sum, transaction) => sum + transaction.amount, 0)
      )
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Server Error:', error);
    return throwError('There was a problem with the server. Please try again later.');
  }
}
