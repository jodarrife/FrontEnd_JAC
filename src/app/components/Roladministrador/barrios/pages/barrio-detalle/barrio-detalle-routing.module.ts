import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrioDetalleComponent } from './barrio-detalle.component';

const routes: Routes = [{ path: '', component: BarrioDetalleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarrioDetalleRoutingModule { }
