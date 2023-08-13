import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/modelo/Card';
import { ServiceCardsService } from 'src/app/servicio/service-cards.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  constructor(public serviceCardsService: ServiceCardsService) { }

  cards: Card[] = [];

  ngOnInit(): void {
    this.actualizar();
  }

  actualizar(){
    this.serviceCardsService.getCards().subscribe((data: any) => {
      this.cards = data;
    });
  }

  findByPan(f:NgForm){
    this.serviceCardsService.getCardByPan(f.controls.pan.value).subscribe((data: any) => {
      this.cards = data;
    });
  }

}
