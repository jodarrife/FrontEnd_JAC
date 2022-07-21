import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginModule } from './login.module';

const routes: Routes = [
  { path: '', component: LoginComponent ,redirectTo: 'login'},
  { path: 'login', loadChildren: () => import('./pages/inicio-sesion/inicio-sesion.module').then(m => m.InicioSesionModule) },
  { path: 'registro', loadChildren: () => import('./pages/registrarse/registrarse.module').then(m => m.RegistrarseModule) },
  { path: 'recuperarPassword', loadChildren: () => import('./pages/recuperar/recuperar.module').then(m => m.RecuperarModule) },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
