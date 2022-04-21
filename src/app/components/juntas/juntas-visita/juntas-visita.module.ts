import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuntasVisitaRoutingModule } from './juntas-visita-routing.module';
import { JuntaComponent } from './pages/junta/junta.component';
import { CargosListComponent } from './pages/cargos-list/cargos-list.component';
import { CargoComponent } from './pages/cargo/cargo.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [
    JuntaComponent,
    CargosListComponent,
    CargoComponent
  ],
  imports: [
    CommonModule,
    JuntasVisitaRoutingModule,
    MaterialModule
  ]
})
export class JuntasVisitaModule { }
