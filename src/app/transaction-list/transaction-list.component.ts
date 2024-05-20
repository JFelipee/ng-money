import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TransactionService } from '../transaction.service';
import { CdkTableDataSourceInput } from '@angular/cdk/table';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit, OnDestroy {
  private transactionSubscription: Subscription = new Subscription();
  displayedColumns!: Iterable<string>;
  transactions!: CdkTableDataSourceInput<any>;

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    if (this.transactionSubscription) {
      this.transactionSubscription.unsubscribe();
    }
  }
}
