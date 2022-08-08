import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ComunaComponent } from '../comuna/comuna.component';

@Component({
  selector: 'app-comuna-list',
  templateUrl: './comuna-list.component.html',
  styleUrls: ['./comuna-list.component.scss']
})
export class ComunaListComponent implements OnInit {

  //Variable
  comunas: any[]=[
    {comunaId: 1, nombreComuna: "comuna 1", ciudadId: 1},
    {comunaId: 1, nombreComuna: "comuna 2", ciudadId: 2},
    {comunaId: 1, nombreComuna: "comuna 3", ciudadId: 3},
  ];
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

    async ngOnInit() {
      await this.consultaComunas();
    }
    //CONSULTAR SERVICE
    async consultaComunas() {
      //Son servicio
      //this.departamentos = await this.comunaService.getComunasOnce()
      //Variable
    }
  
    
    //MODAL CREAR SERVICE
    modalFormulario() {
      const dialogRef = this.dialog.open(ComunaComponent, { 
        width: '30%',
        data: { titulo: "Registrar", comuna: null } });
      dialogRef.afterClosed().subscribe(comuna => {
        console.log('datos ', comuna);
        if (comuna) {
          // registrar datos en firebase
          //this.comunaService.createComuna(comuna)
            //.then(() => {
              console.log("comuna registrada exitosamente");
              console.log(comuna)
              //this.consultarComunasOnce();
            //})
           // .catch((error) => {
              //console.log("error al registrar comuna ", error);
            //})
          // this.registrarComuna(comuna)
         this.comunas.push({
          comunaId: 4, nombreComuna: comuna.nombre, ciudadId: 1
          });
        }else{
          console.log("comuna no registrada");
        }
  
      });
    }
  }
