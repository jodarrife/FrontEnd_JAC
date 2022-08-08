import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuPrincipalComponent } from './shared/components/menu-principal/menu-principal.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { DashboardComponent } from './components/home/pages/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './components/login/login.component';
import { DepatamentosComponent } from './components/Roladministrador/depatamentos/depatamentos.component';
import { ComunasComponent } from './components/Roladministrador/comunas/comunas.component';
import { AdministradoresComponent } from './components/Roladministrador/administradores/administradores.component';
import { BarriosComponent } from './components/Roladministrador/barrios/barrios.component';
import { CiudadesComponent } from './components/Roladministrador/ciudades/ciudades.component';
import { HabitantesComponent } from './components/Roladministrador/habitantes/habitantes.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    LoginComponent,
    BarriosComponent,
    AdministradoresComponent,
    DepatamentosComponent,
    ComunasComponent,
    CiudadesComponent,
    HabitantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
