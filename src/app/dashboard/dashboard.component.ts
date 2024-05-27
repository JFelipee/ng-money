import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  totalEntrada: number = 0;
  totalSaida: number = 0;
  private entradaSubscription: Subscription = new Subscription();
  private saidaSubscription: Subscription | undefined = undefined;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.entradaSubscription = this.transactionService.getTotalEntrada().subscribe(totalEntrada => {
      this.totalEntrada = totalEntrada;
    });
    this.saidaSubscription = this.transactionService.getTotalSaida().subscribe(totalSaida => {
      this.totalSaida = totalSaida;
    });
  }

  ngOnDestroy(): void {
    this.entradaSubscription.unsubscribe();
    if (this.saidaSubscription) {
      this.saidaSubscription.unsubscribe();
    }
  }
}
