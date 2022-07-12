import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentosModule } from './departamentos.module';
import { DepatamentosComponent } from './depatamentos.component';

const routes: Routes = [
  { path: '', component: DepatamentosComponent ,redirectTo: 'List-Departamentos'},
  { path: 'Departamento', loadChildren: () => import('./pages/departamento/departamento.module').then(m => m.DepartamentoModule) },
  { path: 'List-Departamentos', loadChildren: () => import('./pages/departamento-list/departamento-list.module').then(m => m.DepartamentoListModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentosRoutingModule { }
