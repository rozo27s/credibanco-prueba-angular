import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/modelo/Transaction';
import { ServiceCardsService } from 'src/app/servicio/service-cards.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css']
})
export class TransaccionesComponent implements OnInit {

  constructor(public serviceCardsService: ServiceCardsService) { }

  transactions: Transaction[] = [];

  ngOnInit(): void {
    this.actualizar();
  }

  actualizar(){
    this.serviceCardsService.getTransactions().subscribe((data: any) => {
      this.transactions = data;
    });
  }

  findRangeDate(f:NgForm){
    console.log(f.controls)
    this.serviceCardsService.getTransactionByCreationDate(f.controls.initialDate.value, f.controls.endDate.value).subscribe((data: any) => {      
      this.transactions = data;
    });
  }

}
