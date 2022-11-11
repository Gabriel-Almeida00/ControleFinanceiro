import { NovaCategoriaComponent } from './components/categoria/nova-categoria/nova-categoria.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemCategoriaComponent } from './components/categoria/listagem-categoria/listagem-categoria.component';
import { AtualizarCategoriaComponent } from './components/categoria/atualizar-categoria/atualizar-categoria.component';
import { ListagemFuncoesComponent } from './components/funcao/listagem-funcoes/listagem-funcoes.component';
import { NovaFuncaoComponent } from './components/funcao/nova-funcao/nova-funcao.component';
import { AtualizarFuncaoComponent } from './components/funcao/atualizar-funcao/atualizar-funcao.component';
import { RegistrarUsuarioComponent } from './components/Usuario/Registro/registrar-usuario/registrar-usuario.component';
import { LoginUsuarioComponent } from './components/Usuario/Login/login-usuario/login-usuario.component';
import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'categorias/listagemcategorias',
        component: ListagemCategoriaComponent,
      },
      {
        path: 'categorias/novacategoria',
        component: NovaCategoriaComponent,
      },
      {
        path: 'categorias/atualizarcategoria/:id',
        component: AtualizarCategoriaComponent,
      },
      {
        path: 'funcoes/listagemfuncoes',
        component: ListagemFuncoesComponent,
      },
      {
        path: 'funcoes/novafuncao',
        component: NovaFuncaoComponent,
      },
      {
        path: 'funcoes/atualizarfuncao/:id',
        component: AtualizarFuncaoComponent,
      },
    ],
  },

  {
    path: 'usuarios/registrarusuario',
    component: RegistrarUsuarioComponent,
  },
  {
    path: 'usuarios/loginusuario',
    component: LoginUsuarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
