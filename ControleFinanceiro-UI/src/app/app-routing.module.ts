import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemCategoriaComponent } from './components/categoria/listagem-categoria/listagem-categoria.component';

const routes: Routes = [
  {
    path : 'categorias/listagemcategorias', component : ListagemCategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
