import { NovaCategoriaComponent } from './components/categoria/nova-categoria/nova-categoria.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemCategoriaComponent } from './components/categoria/listagem-categoria/listagem-categoria.component';
import { AtualizarCategoriaComponent } from './components/categoria/atualizar-categoria/atualizar-categoria.component';

const routes: Routes = [
  {
    path : 'categorias/listagemcategorias', component : ListagemCategoriaComponent
  },
  {
    path : 'categorias/novacategorias', component : NovaCategoriaComponent
  },
  {
    path : 'categorias/atualizarcategorias/:', component : AtualizarCategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
