import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', component: DepatamentosComponent ,redirectTo: 'List-Departamentos'},
  { path: 'Habitante', loadChildren: () => import('./pages/habitante/habitante.module').then(m => m.HabitanteModule) },
  { path: '', loadChildren: () => import('./pages/habitante-list/habitante-list.module').then(m => m.HabitanteListModule) },
  { path: 'Detalle-Habitante', loadChildren: () => import('./pages/habitante-detalle/habitante-detalle.module').then(m => m.HabitanteDetalleModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitantesRoutingModule { }
