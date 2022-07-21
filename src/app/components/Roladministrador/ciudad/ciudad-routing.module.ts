import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', component: DepatamentosComponent ,redirectTo: 'List-Departamentos'},
  { path: 'Ciudad', loadChildren: () => import('./pages/ciudad/ciudad.module').then(m => m.CiudadModule) },
  { path: '', loadChildren: () => import('./pages/ciudad-list/ciudad-list.module').then(m => m.CiudadListModule) },
  { path: 'Detalle-Ciudad', loadChildren: () => import('./pages/ciudad-detalle/ciudad-detalle.module').then(m => m.CiudadDetalleModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CiudadRoutingModule { }
