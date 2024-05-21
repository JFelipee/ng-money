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
    { description: 'Salario', amount: 5000, type: 'E', date: new Date() },
    { description: 'Aluguel', amount: -1500, type: 'S', date: new Date() },
    { description: 'Renda Fixa', amount: 350, type: 'E', date: new Date() },
    { description: 'Manutençao Do Carro', amount: -200, type: 'S', date: new Date() },
    { description: 'Trabalho Freelance', amount: 2000, type: 'E', date: new Date() },
    { description: 'Jantar ', amount: -100, type: 'S', date: new Date() },
    { description: 'Bitcoin', amount: 1100, type: 'E', date: new Date() },
    { description: 'Cinema', amount: -80, type: 'S', date: new Date() },
    { description: 'Renda Variavel', amount: 450, type: 'E', date: new Date() },
    { description: 'Viagem', amount: -2000, type: 'S', date: new Date() },
    { description: 'Presente', amount: 500, type: 'E', date: new Date() },
  ];

  getTransactions(): Observable<Transaction[]> {
    return of(this.transactions);
  }
}
