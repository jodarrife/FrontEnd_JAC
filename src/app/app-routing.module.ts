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
  { path: 'JAC', loadChildren: () => import('./components/juntas/juntas-visita/juntas-visita.module').then(m => m.JuntasVisitaModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
