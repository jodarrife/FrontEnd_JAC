import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioSesionRoutingModule } from './inicio-sesion-routing.module';
import { InicioSesionComponent } from './inicio-sesion.component';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    InicioSesionRoutingModule,
  ]
})
export class InicioSesionModule { }
