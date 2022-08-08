import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitanteListComponent } from './habitante-list.component';


const routes: Routes = [{ path: '', component: HabitanteListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitanteListRoutingModule { }
