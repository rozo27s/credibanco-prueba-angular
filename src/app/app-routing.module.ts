import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCardComponent } from './componentes/tarjetas/create-card/create-card.component';
import { TarjetasComponent } from './componentes/tarjetas/list-cards/tarjetas.component';
import { TransaccionesComponent } from './componentes/transacciones/transacciones.component';


const appRoutes: Routes = [
  { path: 'list-cards', component: TarjetasComponent},
  { path: 'new-card', component: CreateCardComponent},
  { path: 'transacciones', component: TransaccionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
