import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'authentication', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  { path: 'RolAdminA', loadChildren: () => import('./components/Roladministrador/administradores/administradores.module' ).then(m => m.AdministradoresModule) },
  { path: 'RolAdminB', loadChildren: () => import('./components/Roladministrador/barrios/barrios.module' ).then(m => m.BarriosModule) },
  { path: 'RolAdminC', loadChildren: () => import('./components/Roladministrador/comunas/comunas.module' ).then(m => m.ComunasModule) },
  { path: 'RolAdminD', loadChildren: () => import('./components/Roladministrador/depatamentos/departamentos.module' ).then(m => m.DepartamentosModule) },
  { path: 'RolAdminE', loadChildren: () => import('./components/Roladministrador/ciudad/ciudad-routing.module' ).then(m => m.CiudadRoutingModule) },
  { path: 'JAC', loadChildren: () => import('./components/juntas/juntas-visita/juntas-visita.module').then(m => m.JuntasVisitaModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
