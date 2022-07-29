import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent implements OnInit {
 //Variable
 hide = true;
  private _mobileQueryListener: () => void;
  user:any
  mobileQuery: MediaQueryList;
  
  constructor(
    changeDetectorRef: ChangeDetectorRef,
     media: MediaMatcher, 
    ) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
    this.user="Admin";
  }
  //Visitante
  public allPages = [
    {
      title: 'Inicio',
      url: '/home/inicio',
      iconMaterial: 'home',
      iconFa: null
    },
    {
      title: 'Dashboard',
      url: '/home/dashboard',
      iconMaterial: 'home',
      iconFa: null
    },
    {
      title: 'Administradores',
      url: '/RolAdminA',
      iconMaterial: null,
      iconFa: 'fas fa-city'
    },
    {
      title: 'Departamentos',
      url: '/RolAdminD',
      iconMaterial: null,
      iconFa: 'fas fa-city'
    },
    {
      title: 'Ciudad',
      url: '/RolAdminE',
      iconMaterial: null,
      iconFa: 'fas fa-city'
    },
    {
      title: 'Comunas',
      url: '/RolAdminC',
      iconMaterial: null,
      iconFa: 'fas fa-city'
    },
    {
      title: 'Barrios',
      url: '/RolAdminF',
      iconMaterial: null,
      iconFa: 'fas fa-city'
    },
    {
      title: 'Presidentes Comunales',
      url: '/RolAdmin',
      iconMaterial: null,
      iconFa: 'fas fa-user-shield'
    },
    {
      title: 'Barrios',
      url: '/RolAdminB',
      iconMaterial: null,
      iconFa: 'fas fa-city'
    },
    {
      title: 'JAC',
      url: '/JAC',
      iconMaterial: null,
      iconFa: 'fas fa-user-shield'
    },
      
    {
      title: 'miembroJAC_Pages',
      url: '/home/dashboard',
      iconMaterial: 'home',
      iconFa: null
    },
    {
      title: 'Noticias',
      url: '/comunas',
      iconMaterial: null,
      iconFa: 'fas fa-city'
    },
    {
      title: 'Comunas',
      url: '/comunas',
      iconMaterial: null,
      iconFa: 'fas fa-city'
    },
    {
      title: 'Barrios',
      url: '/barrios',
      iconMaterial: null,
      iconFa: 'fas fa-city'
    },
    {
      title: 'Perfiles JAC',
      url: '/junta',
      iconMaterial: null,
      iconFa: 'fas fa-user-shield'
    },
    {
      title: 'Habitantes',
      url: '/habitantes',
      iconMaterial: null,
      iconFa: 'fas fa-users'
    },
    {
      title: 'Informacion JAC',
      url: '/junta',
      iconMaterial: null,
      iconFa: 'fas fa-user-shield'
    },
    {
      title: 'habitantePages',
      url: '/home/dashboard',
      iconMaterial: 'home',
      iconFa: null
    },
    {
      title: 'Noticias',
      url: '/comunas',
      iconMaterial: null,
      iconFa: 'fas fa-city'
    },
    {
      title: 'Mi Comuna',
      url: '/comunas',
      iconMaterial: null,
      iconFa: 'fas fa-city'
    },
    {
      title: 'Mi Barrio',
      url: '/barrios',
      iconMaterial: null,
      iconFa: 'fas fa-city'
    },
    {
      title: 'PQRS',
      url: '/junta',
      iconMaterial: null,
      iconFa: 'fas fa-user-shield'
    },
    {
      title: 'Perfiles JAC',
      url: '/junta',
      iconMaterial: null,
      iconFa: 'fas fa-user-shield'
    },
    {
      title: 'PQRS',
      url: '/junta',
      iconMaterial: null,
      iconFa: 'fas fa-user-shield'
    },
  ];

  //Visitante
  public publicPages = [
    {
      title: 'Inicio',
      url: '/home/inicio',
      iconMaterial: 'home',
      iconFa: null
    },
    {
      title: 'Dashboard',
      url: '/home/dashboard',
      iconMaterial: 'home',
      iconFa: null
    },
    {
      title: 'Noticias',
      url: '/comunas',
      iconMaterial: null,
      iconFa: 'fas fa-city'
    },
    {
      title: 'Comunas',
      url: '/comunas',
      iconMaterial: null,
      iconFa: 'fas fa-city'
    },
    {
      title: 'Barrios',
      url: '/barrios',
      iconMaterial: null,
      iconFa: 'fas fa-city'
    },
    {
      title: 'Las JAC',
      url: '/junta',
      iconMaterial: null,
      iconFa: 'fas fa-user-shield'
    },
      {
      title: 'Sobre Nosotros',
      url: '/junta',
      iconMaterial: null,
      iconFa: 'fas fa-user-shield'
    },
  ];
  //MIEMBRO JAC
  public miembroJAC_Pages = [
    {
      title: 'Inicio Miembro JAC',
      url: '/home/dashboard',
      iconMaterial: 'home',
      iconFa: null
    },
    {
      title: 'Noticias',
      url: '/comunas',
      iconMaterial: null,
      iconFa: 'fas fa-city'
    },
    {
      title: 'Comunas',
      url: '/comunas',
      iconMaterial: null,
      iconFa: 'fas fa-city'
    },
    {
      title: 'Barrios',
      url: '/barrios',
      iconMaterial: null,
      iconFa: 'fas fa-city'
    },
    {
      title: 'Perfiles JAC',
      url: '/junta',
      iconMaterial: null,
      iconFa: 'fas fa-user-shield'
    },
    {
      title: 'Habitantes',
      url: '/habitantes',
      iconMaterial: null,
      iconFa: 'fas fa-users'
    },
    {
      title: 'Informacion JAC',
      url: '/junta',
      iconMaterial: null,
      iconFa: 'fas fa-user-shield'
    },
  ];
  //HABITANTE
  public habitantePages = [
    {
      title: 'Inicio HABITANTES',
      url: '/home/dashboard',
      iconMaterial: 'home',
      iconFa: null
    },
    {
      title: 'Noticias',
      url: '/comunas',
      iconMaterial: null,
      iconFa: 'fas fa-city'
    },
    {
      title: 'Mi Comuna',
      url: '/comunas',
      iconMaterial: null,
      iconFa: 'fas fa-city'
    },
    {
      title: 'Mi Barrio',
      url: '/barrios',
      iconMaterial: null,
      iconFa: 'fas fa-city'
    },
    {
      title: 'PQRS',
      url: '/junta',
      iconMaterial: null,
      iconFa: 'fas fa-user-shield'
    },
    {
      title: 'Perfiles JAC',
      url: '/junta',
      iconMaterial: null,
      iconFa: 'fas fa-user-shield'
    },
    {
      title: 'PQRS',
      url: '/junta',
      iconMaterial: null,
      iconFa: 'fas fa-user-shield'
    },
  ];
}