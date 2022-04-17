import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecuperarComponent } from './recuperar.component';

const routes: Routes = [{ path: '', component: RecuperarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecuperarRoutingModule { }
