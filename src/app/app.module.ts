import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

//========
import { PrincipalComponent } from './componentes/principal/principal.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './componentes/login/login.component';
import { ForgotpasswordComponent } from './componentes/forgotpassword/forgotpassword.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ProfileService } from './servicio/profile.service';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    ForgotpasswordComponent,
    RegistroComponent
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
