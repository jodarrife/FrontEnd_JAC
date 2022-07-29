import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiudadDetalleComponent } from './ciudad-detalle.component';

const routes: Routes = [{ path: '', component: CiudadDetalleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CiudadDetalleRoutingModule { }
