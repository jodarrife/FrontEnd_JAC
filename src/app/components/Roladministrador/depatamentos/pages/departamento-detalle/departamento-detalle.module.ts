
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentoDetalleRoutingModule } from './departamento-detalle-routing.module';

import { MatFabMenu } from '@angular-material-extensions/fab-menu';

@NgModule({
  
  declarations: [],
  imports: [
    CommonModule,
    DepartamentoDetalleRoutingModule,
  ], 
})
export class DepartamentoDetalleModule { }
