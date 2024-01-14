import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './paginas/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TitulosComponent } from './components/titulos/titulos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { CosmoComponent } from './components/cosmo/cosmo.component';
import { RabatexComponent } from './components/rabatex/rabatex.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InicioComponent,
    TitulosComponent,
    ServiciosComponent,
    TarjetasComponent,
    ProyectosComponent,
    CosmoComponent,
    RabatexComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }