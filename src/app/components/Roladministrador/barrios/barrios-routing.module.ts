import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarriosComponent } from './barrios.component';

const routes: Routes = [
  //{ path: '', component: DepatamentosComponent ,redirectTo: 'List-Departamentos'},
  { path: 'Barrio', loadChildren: () => import('./pages/barrio/barrio.module').then(m => m.BarrioModule) },
  { path: '', loadChildren: () => import('./pages/barrio-list/barrio-list.module').then(m => m.BarrioListModule) },
  { path: 'verBarrio/:id', loadChildren: () => import('./pages/barrio-detalle/barrio-detalle.module').then(m => m.BarrioDetalleModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarriosRoutingModule { }
