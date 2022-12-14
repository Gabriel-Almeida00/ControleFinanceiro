import { GanhosService } from './services/ganhos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { TiposService } from './services/tipos.service';
import { CategoriasService } from './services/categorias.service';
import { FuncoesService } from './services/funcoes.service';
import { AuthGuardService } from './services/auth-guard.service';
import { DespesasService } from './services/despesas.service';
import { MesService } from './services/mes.service';

import {
  ListagemCategoriaComponent,
  DialogExclusaoCategoriasComponent,
} from './components/categoria/listagem-categoria/listagem-categoria.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NovaCategoriaComponent } from './components/categoria/nova-categoria/nova-categoria.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { AtualizarCategoriaComponent } from './components/categoria/atualizar-categoria/atualizar-categoria.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {
  ListagemFuncoesComponent,
  DialogExclusaoFuncoesComponent,
} from './components/funcao/listagem-funcoes/listagem-funcoes.component';
import { NovaFuncaoComponent } from './components/funcao/nova-funcao/nova-funcao.component';
import { AtualizarFuncaoComponent } from './components/funcao/atualizar-funcao/atualizar-funcao.component';
import { RegistrarUsuarioComponent } from './components/Usuario/Registro/registrar-usuario/registrar-usuario.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaskModule } from 'ngx-mask';
import { LoginUsuarioComponent } from './components/Usuario/Login/login-usuario/login-usuario.component';
import { JwtModule } from '@auth0/angular-jwt';
import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';
import { HeaderComponent } from './components/Dashboard/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CartoesService } from './services/cartoes.service';
import { DashboardService } from './services/dashboard.service';

import { NovoCartaoComponent } from './components/Cartao/novo-cartao/novo-cartao.component';
import {
  ListagemCartoesComponent,
  DialogExclusaoCartoesComponent,
} from './components/Cartao/listagem-cartoes/listagem-cartoes.component';
import { AtualizarCartaoComponent } from './components/Cartao/AtualizarCartao/atualizar-cartao/atualizar-cartao.component';
import { NovaDespesaComponent } from './components/Despesas/nova-despesa/nova-despesa.component';
import {
  ListagemDespesasComponent,
  DialogExclusaoDespesasComponent,
} from './components/Despesas/listagem-despesas/listagem-despesas.component';
import { AtualizarDespesaComponent } from './components/Despesas/atualizar-despesa/atualizar-despesa.component';
import { NovoGanhoComponent } from './components/Ganho/novo-ganho/novo-ganho.component';
import {
  ListagemGanhosComponent,
  DialogExclusaoGanhosComponent,
} from './components/Ganho/listagem-ganhos/listagem-ganhos.component';
import { AtualizarGanhoComponent } from './components/Ganho/atualizar-ganho/atualizar-ganho.component';
import { AtualizarUsuarioComponent } from './components/Usuario/atualizar-usuario/atualizar-usuario.component';
import { IndexComponent } from './components/Dashboard/index/index.component';
import { ChartsModule } from 'ng2-charts';

export function PegarTokenUsuario() {
  return localStorage.getItem('TokenUsuarioLogado');
}
@NgModule({
  declarations: [
    AppComponent,
    ListagemCategoriaComponent,
    NovaCategoriaComponent,
    AtualizarCategoriaComponent,
    DialogExclusaoCategoriasComponent,
    DialogExclusaoFuncoesComponent,
    DialogExclusaoCartoesComponent,
    DialogExclusaoDespesasComponent,
    DialogExclusaoGanhosComponent,
    ListagemFuncoesComponent,
    NovaFuncaoComponent,
    AtualizarFuncaoComponent,
    RegistrarUsuarioComponent,
    LoginUsuarioComponent,
    DashboardComponent,
    HeaderComponent,
    NovoCartaoComponent,
    ListagemCartoesComponent,
    AtualizarCartaoComponent,
    NovaDespesaComponent,
    ListagemDespesasComponent,
    AtualizarDespesaComponent,
    NovoGanhoComponent,
    ListagemGanhosComponent,
    AtualizarGanhoComponent,
    AtualizarUsuarioComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule,
    MatGridListModule,
    MatDialogModule,
    FormsModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatProgressBarModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    ChartsModule,

    MatListModule,
    NgxMaskModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: PegarTokenUsuario,
        allowedDomains: ['localhost:5000'],
        disallowedRoutes: [],
      },
    }),
  ],
  providers: [
    TiposService,
    CategoriasService,
    FuncoesService,
    AuthGuardService,
    HttpClientModule,
    CartoesService,
    DespesasService,
    MesService,
    GanhosService,
    DashboardService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
