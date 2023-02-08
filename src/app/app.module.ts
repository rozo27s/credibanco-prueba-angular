import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
//=========
import { CargoService } from './servicio/cargo.service';
import { ProductoService } from './servicio/producto.service';
import { UsuarioService } from './servicio/usuario.service';
import { ActualizacionService } from './servicio/actualizacion.service';
//========
import { PrincipalComponent } from './componentes/principal/principal.component';
import { TarjetasComponent } from './componentes/tarjetas/tarjetas.component';
import { TransaccionesComponent } from './componentes/transacciones/transacciones.component';
import { ServiceCardsService } from './servicio/service-cards.service';

import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'tarjetas', component: TarjetasComponent},
  { path: 'transacciones', component: TransaccionesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    TarjetasComponent,
    TransaccionesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
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
