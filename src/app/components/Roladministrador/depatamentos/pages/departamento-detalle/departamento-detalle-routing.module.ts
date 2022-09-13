import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentoDetalleComponent } from './departamento-detalle.component';

const routes: Routes = [{ path: '', component: DepartamentoDetalleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentoDetalleRoutingModule { }
