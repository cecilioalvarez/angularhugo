import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListaOrdenadorComponent } from './lista-ordenador/lista-ordenador.component';
import {FormsModule} from "@angular/forms"
import {HttpClientModule} from "@angular/common/http";
import { FormularioNuevoComponent } from './formulario-nuevo/formulario-nuevo.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FormularioEditarComponent } from './formulario-editar/formulario-editar.component';
import { ErrorComponent } from './error/error.component';
@NgModule({
  declarations: [
    AppComponent,

    ListaOrdenadorComponent,

    FormularioNuevoComponent,

    DetalleComponent,

    FormularioEditarComponent,

    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
