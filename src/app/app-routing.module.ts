import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { EditarComponent } from './editar/editar.component';
import { SaidaComponent } from './saida/saida.component';

const routes: Routes = [
  {
    path: 'produtos',
    component: ListarComponent,
    data: { title: 'Lista de Produtos' }
  },
  {
    path: 'produtos/detalhe/:nome',
    component: DetalheComponent,
    data: { title: 'Detalhe do Produto' }
  },
  {
    path: 'produtos/detalhe/:desc',
    component: DetalheComponent,
    data: { title: 'Detalhe do Produto' }
  },
  {
    path: 'produtos/detalhe/:preco',
    component: DetalheComponent,
    data: { title: 'Detalhe do Produto' }
  },
  {
    path: 'produtos/editar',
    component: EditarComponent,
    data: { title: 'Edtiar Produto'}
  },

  {
    path: 'produtos/saida',
    component: SaidaComponent,
    data: { title: 'Saiu'}
  },
  {
    path: 'produtos/novo',
    component: AdicionarComponent,
    data: { title: 'Novo do Produto' }
  },
  {
    path: '',
    redirectTo: '/produtos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
