import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiudadListComponent } from './ciudad-list.component';

const routes: Routes = [{ path: '', component: CiudadListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CiudadListRoutingModule { }
