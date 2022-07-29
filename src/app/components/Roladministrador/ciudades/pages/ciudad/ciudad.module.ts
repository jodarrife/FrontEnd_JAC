import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CiudadRoutingModule } from './ciudad-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CiudadRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CiudadModule { }
