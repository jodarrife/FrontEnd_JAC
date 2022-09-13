import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administradores-routing.module';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { AdministradorListComponent } from './pages/administrador-list/administrador-list.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [
    AdministradorComponent,
    AdministradorListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdministradorRoutingModule,
  ]
})
export class AdministradoresModule { }
