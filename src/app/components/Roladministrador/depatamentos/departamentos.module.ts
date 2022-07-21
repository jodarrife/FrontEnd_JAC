import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentosRoutingModule } from './departamentos-routing.module';
import { DepartamentoComponent } from './pages/departamento/departamento.component';
import { DepartamentoListComponent } from './pages/departamento-list/departamento-list.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [
    DepartamentoComponent,
    DepartamentoListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DepartamentosRoutingModule
  ]
})
export class DepartamentosModule { }
