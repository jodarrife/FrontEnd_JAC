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
  { path: 'RolAdminAdministrador', loadChildren: () => import('./components/Roladministrador/administradores/administradores.module' ).then(m => m.AdministradoresModule) },
  { path: 'RolAdminBarrio', loadChildren: () => import('./components/Roladministrador/barrios/barrios.module' ).then(m => m.BarriosModule) },
  { path: 'RolAdminComuna', loadChildren: () => import('./components/Roladministrador/comunas/comunas.module' ).then(m => m.ComunasModule) },
  { path: 'RolAdminDepartamento', loadChildren: () => import('./components/Roladministrador/depatamentos/departamentos.module' ).then(m => m.DepartamentosModule) },
  { path: 'RolAdminMunicipio', loadChildren: () => import('./components/Roladministrador/ciudades/ciudades.module' ).then(m => m.CiudadesModule) },
  { path: 'RolAdminHabitante', loadChildren: () => import('./components/Roladministrador/habitantes/habitantes.module' ).then(m => m.HabitantesModule) },
  { path: 'JAC', loadChildren: () => import('./components/juntas/juntas-visita/juntas-visita.module').then(m => m.JuntasVisitaModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
