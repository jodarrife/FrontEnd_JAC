import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitanteDetalleComponent } from './habitante-detalle.component';

const routes: Routes = [{ path: '', component: HabitanteDetalleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitanteDetalleRoutingModule { }
