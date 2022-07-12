import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarriosComponent } from './barrios.component';

const routes: Routes = [
  { path: '', component: BarriosComponent ,redirectTo: 'List-Barrios'},
  { path: 'Barrio', loadChildren: () => import('./pages/barrio/barrio.module').then(m => m.BarrioModule) },
  { path: 'List-Barrios', loadChildren: () => import('./pages/barrio-list/barrio-list.module').then(m => m.BarrioListModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarriosRoutingModule { }
