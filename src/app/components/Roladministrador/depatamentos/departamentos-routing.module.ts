import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentosModule } from './departamentos.module';
import { DepatamentosComponent } from './depatamentos.component';

const routes: Routes = [
  //{ path: '', component: DepatamentosComponent ,redirectTo: 'List-Departamentos'},
  { path: 'Departamento', loadChildren: () => import('./pages/departamento/departamento.module').then(m => m.DepartamentoModule) },
  { path: '', loadChildren: () => import('./pages/departamento-list/departamento-list.module').then(m => m.DepartamentoListModule) },
  { path: 'verDepartamento/:id', loadChildren: () => import('./pages/departamento-detalle/departamento-detalle.module').then(m => m.DepartamentoDetalleModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentosRoutingModule { }
