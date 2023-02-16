import { LoginService } from './login/login.service';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule} from '@angular/forms';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';


const AppRouts:Routes=[

  {path: 'login', component:LoginComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'card', component:CardComponent},
  {path: 'tarjetas', component:TarjetasComponent},
  {path: '', component:HomeComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    LoginComponent,
    HomeComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    TarjetasComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRouts),
    FormsModule
    ],

  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
