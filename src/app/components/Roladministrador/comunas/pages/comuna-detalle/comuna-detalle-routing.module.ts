import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunaDetalleComponent } from './comuna-detalle.component';

const routes: Routes = [{ path: '', component: ComunaDetalleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComunaDetalleRoutingModule { }
