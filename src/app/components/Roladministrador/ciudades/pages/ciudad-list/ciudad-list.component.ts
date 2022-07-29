import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CiudadComponent } from '../ciudad/ciudad.component';

@Component({
  selector: 'app-ciudad-list',
  templateUrl: './ciudad-list.component.html',
  styleUrls: ['./ciudad-list.component.scss']
})
export class CiudadListComponent implements OnInit {

   //Variable
   ciudades: any[]=[
    {ciudadId: 1, nombreCiudad: "valledupar", departamentoId: 1},
    {ciudadId: 1, nombreCiudad: "fogonia", departamentoId: 2},
    {ciudadId: 1, nombreCiudad: "codayork", departamentoId: 3},
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
      const dialogRef = this.dialog.open(CiudadComponent, { data: { titulo: "Registrar", ciudad: null } });
      dialogRef.afterClosed().subscribe(ciudad => {
        console.log('datos ', ciudad);
        if (ciudad) {
          // registrar datos en firebase
          //this.comunaService.createComuna(comuna)
            //.then(() => {
              console.log("Ciudad registrada exitosamente");
              console.log(ciudad)
              //this.consultarComunasOnce();
            //})
           // .catch((error) => {
              //console.log("error al registrar comuna ", error);
            //})
          // this.registrarComuna(comuna)
         this.ciudades.push({
          ciudadId: 4, nombreCiudad: ciudad.nombre, departamentoId: 1
          });
        }else{
          console.log("Ciudad no registrada");
        }
  
      });
    }
  }