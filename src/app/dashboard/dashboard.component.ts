import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  totalIncome = 0;
  totalExpenses = 0;
  balance = 0;
  private transactionSubscription: Subscription = new Subscription();

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionSubscription = this.transactionService.getTransactions().subscribe(transactions => {
      this.totalIncome = transactions
        .filter(transaction => transaction.type === 'E')
        .reduce((acc, transaction) => acc + transaction.amount, 0);

      this.totalExpenses = transactions
        .filter(transaction => transaction.type === 'S')
        .reduce((acc, transaction) => acc + transaction.amount, 0);

      this.balance = this.totalIncome - this.totalExpenses;
    });
  }

  ngOnDestroy(): void {
    if (this.transactionSubscription) {
      this.transactionSubscription.unsubscribe();
    }
  }
}
