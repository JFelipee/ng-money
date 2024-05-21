import { Component, OnInit } from '@angular/core';
import { TransactionService, Transaction } from '../transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  transactions: Transaction[] = [];
  displayedColumns: string[] = ['description', 'amount', 'type', 'date'];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(transactions => {
      this.transactions = transactions;
    });
  }
}
