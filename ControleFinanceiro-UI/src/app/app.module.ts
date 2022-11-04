
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TiposService } from './services/tipos.service';
import { CategoriasService } from './services/categorias.service';
import { ListagemCategoriaComponent } from './components/categoria/listagem-categoria/listagem-categoria.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [AppComponent,ListagemCategoriaComponent],
  imports: [BrowserModule,AppRoutingModule,BrowserAnimationsModule,MatTableModule],
  providers: [TiposService,CategoriasService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
