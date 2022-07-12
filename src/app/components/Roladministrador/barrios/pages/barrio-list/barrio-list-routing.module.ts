import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrioListComponent } from './barrio-list.component';

const routes: Routes = [{ path: '', component: BarrioListComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarrioListRoutingModule { }
