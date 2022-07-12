import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunasComponent } from './comunas.component';

const routes: Routes = [
  { path: '', component: ComunasComponent ,redirectTo: 'List-Comunas'},
  { path: 'Comuna', loadChildren: () => import('./pages/comuna/comuna.module').then(m => m.ComunaModule) },
  { path: 'List-Comunas', loadChildren: () => import('./pages/comuna-list/comuna-list.module').then(m => m.ComunaListModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComunasRoutingModule { }
