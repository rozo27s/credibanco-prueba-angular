import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCardComponent } from './componentes/tarjetas/create-card/create-card.component';
import { TarjetasComponent } from './componentes/tarjetas/list-cards/tarjetas.component';
import { TransaccionesComponent } from './componentes/transacciones/transacciones.component';
import { LoginComponent } from './componentes/login/login.component';
import { ForgotpasswordComponent } from './componentes/forgotpassword/forgotpassword.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PrincipalComponent } from './componentes/principal/principal.component';


const appRoutes: Routes = [
  { path: 'list-cards', component: TarjetasComponent},
  { path: 'new-card', component: CreateCardComponent},
  { path: 'transacciones', component: TransaccionesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'forgot-password', component: ForgotpasswordComponent},
  { path: 'register', component: RegistroComponent},
  { path: 'principal', component: PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
