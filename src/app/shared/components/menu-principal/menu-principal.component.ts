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
  }

  public adminPages = [
    {
      title: 'Dashboard',
      url: '/home/dashboard',
      iconMaterial: 'dashboard',
      iconFa: null
    },
    {
      title: 'Inicio',
      url: '/home/landing',
      iconMaterial: 'home',
      iconFa: null
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
      title: 'Habitantes',
      url: '/habitantes',
      iconMaterial: null,
      iconFa: 'fas fa-users'
    },
    {
      title: 'PQRS',
      url: '/pqrs',
      iconMaterial: 'question_answer',
      iconFa: null
    },
    /*
    {
      title: 'Correspondencia',
      url: '/correspondencias',
      iconMaterial: null,
      iconFa: 'fas fa-folder-open'
    },
    */
    {
      title: 'Junta administrativa',
      url: '/junta',
      iconMaterial: null,
      iconFa: 'fas fa-user-shield'
    },
    /*
    {
      title: 'Convenios',
      url: '/convenios',
      iconMaterial: null,
      iconFa: 'fas fa-file-signature'
    },
    */
    {
      title: 'Lineas de Atención',
      url: '/lineasAtencion',
      iconMaterial: null,
      iconFa: 'fas fa-file-signature'
    },
    /*    
    {
      title: 'Publicaciones',
      url: '/publicaciones',
      iconMaterial: null,
      iconFa: 'fas fa-file-invoice'
    },*/

  ];
}

