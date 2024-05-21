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
  addTransaction(value: any) {
    throw new Error('Method not implemented.');
  }

  private transactions: Transaction[] = [
    { description: 'Salary', amount: 5000, type: 'E', date: new Date() },
    { description: 'Rent', amount: -1500, type: 'S', date: new Date() },
    { description: 'Groceries', amount: -300, type: 'S', date: new Date() },
    { description: 'Car Maintenance', amount: -200, type: 'S', date: new Date() },
    { description: 'Freelance Work', amount: 2000, type: 'E', date: new Date() },
    { description: 'Dining Out', amount: -100, type: 'S', date: new Date() },
    { description: 'Utilities', amount: -150, type: 'S', date: new Date() },
    { description: 'Entertainment', amount: -80, type: 'S', date: new Date() },
    { description: 'Clothing', amount: -250, type: 'S', date: new Date() },
    { description: 'Savings', amount: 1000, type: 'E', date: new Date() },
    { description: 'Gift', amount: 500, type: 'E', date: new Date() },
  ];

  getTransactions(): Observable<Transaction[]> {
    return of(this.transactions);
  }
}
