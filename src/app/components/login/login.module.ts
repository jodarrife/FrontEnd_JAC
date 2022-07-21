import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { RecuperarComponent } from './pages/recuperar/recuperar.component';

@NgModule({
  declarations: [
    InicioSesionComponent,
    RegistrarseComponent,
    RecuperarComponent,

  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule
  ]
})
export class LoginModule { }
