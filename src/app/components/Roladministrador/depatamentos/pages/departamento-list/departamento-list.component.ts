import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentoComponent } from '../departamento/departamento.component';

@Component({
  selector: 'app-departamento-list',
  templateUrl: './departamento-list.component.html',
  styleUrls: ['./departamento-list.component.scss']
})
export class DepartamentoListComponent implements OnInit {

  //Variable
  departamentos: any[]=[
    {departamentoId: 1, nombreDepartamento: "Cesar"},
    {departamentoId: 1, nombreDepartamento: "prueba"},
    {departamentoId: 1, nombreDepartamento: "esPrueba"},
  ];

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
  ) { }


  async ngOnInit() {
    await this.consultarDepartamentos();
  }
  //CONSULTAR SERVICE
  async consultarDepartamentos() {
    //Son servicio
    //this.departamentos = await this.comunaService.getComunasOnce()
    //Variable
  }

  
  //MODAL CREAR SERVICE
  modalFormulario() {
    const dialogRef = this.dialog.open(DepartamentoComponent, { data: { titulo: "Registrar", departamento: null } });
    dialogRef.afterClosed().subscribe(departamento => {
      console.log('datos ', departamento);
      if (departamento) {
        // registrar datos en firebase
        //this.comunaService.createComuna(comuna)
          //.then(() => {
            console.log("comuna registrada exitosamente");
            console.log(departamento)
            //this.consultarComunasOnce();
          //})
         // .catch((error) => {
            //console.log("error al registrar comuna ", error);
          //})
        // this.registrarComuna(comuna)
       this.departamentos.push({
         departamentoId:  1, nombreDepartamento: departamento.nombre
        });
      }else{
        console.log("comuna no registrada");
      }

    });
  }
}
