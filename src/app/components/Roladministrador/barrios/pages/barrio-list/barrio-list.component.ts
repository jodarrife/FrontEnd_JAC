import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BarrioComponent } from '../barrio/barrio.component';

@Component({
  selector: 'app-barrio-list',
  templateUrl: './barrio-list.component.html',
  styleUrls: ['./barrio-list.component.scss']
})
export class BarrioListComponent implements OnInit {

 
   //Variable
   barrios: any[]=[
    {barrioId: 1, nombreBarrio: "12 octubre", comunaId: 1},
    {barrioId: 1, nombreBarrio: "san fernando", comunaId: 2},
    {barrioId: 1, nombreBarrio: "san martin", comunaId: 3},
  ];
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

    async ngOnInit() {
      await this.consultaCiudades();
    }
    //CONSULTAR SERVICE
    async consultaCiudades() {
      //Son servicio
      //this.departamentos = await this.comunaService.getComunasOnce()
      //Variable
    }
  
    
    //MODAL CREAR SERVICE
    modalFormulario() {
      const dialogRef = this.dialog.open(BarrioComponent, { data: { titulo: "Registrar", barrio: null } });
      dialogRef.afterClosed().subscribe(barrio => {
        console.log('datos ', barrio);
        if (barrio) {
          // registrar datos en firebase
          //this.comunaService.createComuna(comuna)
            //.then(() => {
              console.log("barrio registrada exitosamente");
              console.log(barrio)
              //this.consultarComunasOnce();
            //})
           // .catch((error) => {
              //console.log("error al registrar comuna ", error);
            //})
          // this.registrarComuna(comuna)
         this.barrios.push({
          barrioId: 4, nombreBarrio: barrio.nombre, comunaId: 1
          });
        }else{
          console.log("barrio no registrada");
        }
  
      });
    }
  }