import { Component, OnInit } from '@angular/core';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isSidenavOpened = true;
  transactions: any[] = [];
  totalAmount = 0;
  totalTransactions = 0;

  constructor(private transactionService: TransactionService) {
    this.transactions = [];
  }

  ngOnInit(): void {
    this.loadTransactions();
  }

  toggleSidenav(): void {
    this.isSidenavOpened = !this.isSidenavOpened;
  }

  loadTransactions(): void {
    this.transactionService.getTransactions().subscribe(transactions => {
      this.transactions = transactions;
      this.calculateTotalAmount();
    });
  }

  calculateTotalAmount(): void {
    this.totalAmount = this.transactions.reduce((total, transaction) => total + transaction.amount, 0);
    this.totalTransactions = this.transactions.length;
  }
}
