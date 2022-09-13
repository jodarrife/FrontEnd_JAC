import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunasRoutingModule } from './comunas-routing.module';
import { ComunaComponent } from './pages/comuna/comuna.component';
import { ComunaListComponent } from './pages/comuna-list/comuna-list.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ComunaDetalleComponent } from './pages/comuna-detalle/comuna-detalle.component';



@NgModule({schemas: [   CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    ComunaComponent,
    ComunaListComponent,
    ComunaDetalleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComunasRoutingModule
  ]
})
export class ComunasModule { }
