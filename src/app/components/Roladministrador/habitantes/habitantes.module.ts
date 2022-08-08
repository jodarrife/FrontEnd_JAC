import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitantesRoutingModule } from './habitantes-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { HabitanteComponent } from './pages/habitante/habitante.component';
import { HabitanteListComponent } from './pages/habitante-list/habitante-list.component';


@NgModule({
  declarations: [
    HabitanteComponent,
    HabitanteListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HabitantesRoutingModule
  ]
})
export class HabitantesModule { }
