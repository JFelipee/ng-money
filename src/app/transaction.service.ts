import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Transaction {
  description: string;
  amount: number;
  type: string;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactions: Transaction[] = [
    { description: 'Salary', amount: 5000, type: 'E', date: new Date() },
    { description: 'Rent', amount: -1500, type: 'S', date: new Date() },
    { description: 'Groceries', amount: -300, type: 'S', date: new Date() },

  ];

  getTransactions(): Observable<Transaction[]> {
    return of(this.transactions);
  }
}
