import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarriosRoutingModule } from './barrios-routing.module';
import { BarrioComponent } from './pages/barrio/barrio.component';
import { BarrioListComponent } from './pages/barrio-list/barrio-list.component';


@NgModule({
  declarations: [
    BarrioComponent,
    BarrioListComponent
  ],
  imports: [
    CommonModule,
    BarriosRoutingModule
  ]
})
export class BarriosModule { }
