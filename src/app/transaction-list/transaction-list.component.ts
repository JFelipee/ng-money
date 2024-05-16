import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit, OnDestroy {
  transactions: any[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.getTransactions()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(transactions => {
        this.transactions = transactions.slice(0, 10);
      });
  }

  loadMoreTransactions(): void {
    this.transactionService.getTransactions()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(transactions => {
        this.transactions = transactions;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
