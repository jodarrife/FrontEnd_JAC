import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { MaterialModule } from 'src/app/shared/modules/material/material.module';

import { CarruselContenedorComponent } from './pages/carrusel-contenedor/carrusel-contenedor.component';
import { ContenedorComponent } from './pages/contenedor/contenedor.component';
import { CardsComponent } from './pages/cards/cards.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    ActivityComponent,
    CardsComponent,
    CarruselContenedorComponent,
  ],
  imports: [
    CommonModule, 
    HomeRoutingModule, 
    MaterialModule],
})
export class HomeModule {}
