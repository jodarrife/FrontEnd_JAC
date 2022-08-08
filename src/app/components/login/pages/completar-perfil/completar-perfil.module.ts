import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompletarPerfilRoutingModule } from './completar-perfil-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    CompletarPerfilRoutingModule
  ]
})
export class CompletarPerfilModule { }
