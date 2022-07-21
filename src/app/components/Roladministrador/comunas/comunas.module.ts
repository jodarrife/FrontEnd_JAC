import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunasRoutingModule } from './comunas-routing.module';
import { ComunaComponent } from './pages/comuna/comuna.component';
import { ComunaListComponent } from './pages/comuna-list/comuna-list.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [
    ComunaComponent,
    ComunaListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComunasRoutingModule
  ]
})
export class ComunasModule { }
