import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuntasVisitaComponent } from './juntas-visita.component';

const routes: Routes = [
  { path: '', component: JuntasVisitaComponent ,redirectTo: 'junta'},
  { path: 'junta', loadChildren: () => import('./pages/junta/junta.module').then(m => m.JuntaModule) },
  { path: 'cargos', loadChildren: () => import('./pages/cargos-list/cargos-list.module').then(m => m.CargosListModule) },
  { path: 'detalle', loadChildren: () => import('./pages//cargo/cargo.module').then(m => m.CargoModule) },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuntasVisitaRoutingModule { }
