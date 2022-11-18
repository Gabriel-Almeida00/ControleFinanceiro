import { IndexComponent } from './components/Dashboard/index/index.component';
import { AtualizarUsuarioComponent } from './components/Usuario/atualizar-usuario/atualizar-usuario.component';
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
import { AuthGuardService } from './services/auth-guard.service';
import { NovoCartaoComponent } from './components/Cartao/novo-cartao/novo-cartao.component';
import { ListagemCartoesComponent } from './components/Cartao/listagem-cartoes/listagem-cartoes.component';
import { AtualizarCartaoComponent } from './components/Cartao/AtualizarCartao/atualizar-cartao/atualizar-cartao.component';
import { NovaDespesaComponent } from './components/Despesas/nova-despesa/nova-despesa.component';
import { ListagemDespesasComponent } from './components/Despesas/listagem-despesas/listagem-despesas.component';
import { AtualizarDespesaComponent } from './components/Despesas/atualizar-despesa/atualizar-despesa.component';
import { NovoGanhoComponent } from './components/Ganho/novo-ganho/novo-ganho.component';
import { ListagemGanhosComponent } from './components/Ganho/listagem-ganhos/listagem-ganhos.component';
import { AtualizarGanhoComponent } from './components/Ganho/atualizar-ganho/atualizar-ganho.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
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
      {
        path: 'cartoes/novocartao',
        component: NovoCartaoComponent,
      },
      {
        path: 'cartoes/listagemcartoes',
        component: ListagemCartoesComponent,
      },
      {
        path: 'cartoes/atualizarcartao/:id',
        component: AtualizarCartaoComponent,
      },
      {
        path: 'despesas/novadespesa',
        component: NovaDespesaComponent,
      },
      {
        path: 'despesas/listagemdespesas',
        component: ListagemDespesasComponent,
      },
      {
        path: 'despesas/atualizardespesa/:id',
        component: AtualizarDespesaComponent,
      },
      {
        path: 'ganhos/novoganho',
        component: NovoGanhoComponent,
      },
      {
        path: 'ganhos/listagemganhos',
        component: ListagemGanhosComponent,
      },
      {
        path: 'ganhos/atualizarganho/:id',
        component: AtualizarGanhoComponent,
      },
      {
        path: 'usuarios/atualizarusuario',
        component: AtualizarUsuarioComponent,
      },
      {
        path: 'dashboard/index',
        component: IndexComponent,
      }
    ],
  },

  {
    path: 'usuarios/registrarusuario',
    component: RegistrarUsuarioComponent,
  },
  {
    path: 'usuarios/loginusuario',
    component: LoginUsuarioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
