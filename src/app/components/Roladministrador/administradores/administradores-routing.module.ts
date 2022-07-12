import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradoresComponent } from './administradores.component';

const routes: Routes = [
  { path: '', component: AdministradoresComponent ,redirectTo: 'Administrador'},
  { path: 'Administrador', loadChildren: () => import('./pages/administrador/administrador.module').then(m => m.AdministradorModule) },
  { path: 'List-Administradores', loadChildren: () => import('./pages/administrador-list/administrador-list.module').then(m => m.AdministradorListModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
