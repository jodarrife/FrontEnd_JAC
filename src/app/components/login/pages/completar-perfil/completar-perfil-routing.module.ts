import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletarPerfilComponent } from './completar-perfil.component';

const routes: Routes = [{ path: '', component: CompletarPerfilComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompletarPerfilRoutingModule { }
