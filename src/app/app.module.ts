import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
//=========
import { CargoService } from './servicio/cargo.service';
import { ProductoService } from './servicio/producto.service';
import { UsuarioService } from './servicio/usuario.service';
import { ActualizacionService } from './servicio/actualizacion.service';
//========
import { PrincipalComponent } from './componentes/principal/principal.component';
import { TarjetasComponent } from './componentes/tarjetas/list-cards/tarjetas.component';
import { TransaccionesComponent } from './componentes/transacciones/transacciones.component';
import { ServiceCardsService } from './servicio/service-cards.service';

import { FormsModule } from '@angular/forms';
import { CreateCardComponent } from './componentes/tarjetas/create-card/create-card.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    TarjetasComponent,
    TransaccionesComponent,
    CreateCardComponent
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CargoService,
    ProductoService,
    UsuarioService,
    ActualizacionService,
    ServiceCardsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
