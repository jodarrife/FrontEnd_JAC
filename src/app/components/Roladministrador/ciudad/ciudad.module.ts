import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CiudadRoutingModule } from './ciudad-routing.module';
import { CiudadComponent } from './pages/ciudad/ciudad.component';
import { CiudadDetalleComponent } from './pages/ciudad-detalle/ciudad-detalle.component';
import { CiudadListComponent } from './pages/ciudad-list/ciudad-list.component';


@NgModule({
  declarations: [
    CiudadComponent,
    CiudadDetalleComponent,
    CiudadListComponent
  ],
  imports: [
    CommonModule,
    CiudadRoutingModule
  ]
})
export class CiudadModule { }
