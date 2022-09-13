import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarriosRoutingModule } from './barrios-routing.module';
import { BarrioComponent } from './pages/barrio/barrio.component';
import { BarrioListComponent } from './pages/barrio-list/barrio-list.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { BarrioDetalleComponent } from './pages/barrio-detalle/barrio-detalle.component';

@NgModule({schemas: [   CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    BarrioComponent,
    BarrioListComponent,
    BarrioDetalleComponent,
  
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BarriosRoutingModule
  ]
})
export class BarriosModule { }
