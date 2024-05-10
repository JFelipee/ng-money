import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactions: any[] = [
    {
      "description": "Salário",
      "amount": 2500,
      "type": "E"
    },
    {
      "description": "Aluguel",
      "amount": 1000,
      "type": "S"
    },
    {
      "description": "Imovel",
      "amount": 950,
      "type": "E"
    },
    {
      "description": "Mercado",
      "amount": 700,
      "type": "S"
    },
    {
      "description": "Dividendos",
      "amount": 1650,
      "type": "E"
    },
    {
      "description": "lazer",
      "amount": 500,
      "type": "S"
    },
    {
      "description": "Fundo imobiliario",
      "amount": 4000,
      "type": "E"
    },
    {
      "description": "Faculdade",
      "amount": 1000,
      "type": "S"
    },
    {
      "description": "FreeLancer",
      "amount": 600,
      "type": "E"
    },
    {
      "description": "Conta de luz",
      "amount": 300,
      "type": "S"
    },
    {
      "description": "Bônus",
      "amount": 250,
      "type": "E"
    },
    {
      "description": "Cinema",
      "amount": 60,
      "type": "S"
    }
  ];

  constructor() { }

  getTransactions(): Observable<any[]> {
    return of(this.transactions);
  }

  addTransaction(transaction: any): Observable<any> {

    return of(transaction);
  }
}
