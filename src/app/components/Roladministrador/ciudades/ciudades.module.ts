import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CiudadesRoutingModule } from './ciudades-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { CiudadComponent } from './pages/ciudad/ciudad.component';
import { CiudadListComponent } from './pages/ciudad-list/ciudad-list.component';
import { CiudadDetalleComponent } from './pages/ciudad-detalle/ciudad-detalle.component';


@NgModule({schemas: [   CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    CiudadComponent,
    CiudadListComponent,
    CiudadDetalleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CiudadesRoutingModule
  ]
})
export class CiudadesModule { }
