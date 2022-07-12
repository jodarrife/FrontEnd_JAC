import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunaListComponent } from './comuna-list.component';

const routes: Routes = [{ path: '', component: ComunaListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComunaListRoutingModule { }
