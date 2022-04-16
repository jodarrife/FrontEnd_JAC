import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent implements OnInit {

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

  public adminPages = [
    {
      title: 'Inicio',
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
}

