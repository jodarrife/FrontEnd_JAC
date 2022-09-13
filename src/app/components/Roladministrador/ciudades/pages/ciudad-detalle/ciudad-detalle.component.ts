import { MatFabMenu } from '@angular-material-extensions/fab-menu';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MunicipioService } from 'src/app/services/municipio.service';
import { ModalConfirmacionComponent } from 'src/app/shared/components/modal-confirmacion/modal-confirmacion.component';
import { CiudadComponent } from '../ciudad/ciudad.component';

@Component({
  selector: 'app-ciudad-detalle',
  templateUrl: './ciudad-detalle.component.html',
  styleUrls: ['./ciudad-detalle.component.scss']
})
export class CiudadDetalleComponent implements OnInit {

 
displayedColumns = ['index','nombre','estrato', 'numeroHabitantes'];

fabButtonsRandom: MatFabMenu[] = [
  {
    id: 1,
    icon: 'create',
    tooltip: "editar",
    tooltipPosition: 'left'
  },
  {
    id: 2,
    icon: 'location_city',
    tooltip:"Registrar barrio",
    tooltipPosition: 'left'
  },
  {
    id: 3,
    icon: 'delete',
    tooltip:"eliminar",
    tooltipPosition: 'left'
  },
];
  //variables
  municipio: any ={};
  id:any;
constructor(
  
  private route: ActivatedRoute,
  private router: Router,
  public dialog: MatDialog,
  private municipioService: MunicipioService,
  private toastr: ToastrService,
  ) { 

  }

ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id');
  this.consultarDetalle(this.id);
}

consultarDetalle(id: any): void{
  this.municipioService.getMunicipio(id).subscribe(data => {
    console.log(data);
    this.municipio = data;
  });
}

//metodo para llamar al modal
modalFormulario(){
  const dialogRef = this.dialog.open(CiudadComponent,{data:  {titulo: "modificar", municipio: this.municipio}});

  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog result',result);
    if(result){
       this.modificar(result)
    }
    //luego de recibir los datos los mandamos a firebase

  });
}

modalFormularioBarrio(){
  
}

modificar(datos: Object){
 
}



modalEliminar(){
  const dialogRef = this.dialog.open(ModalConfirmacionComponent,{data: {titulo:"Seguro desea eliminar?",detalle:"esta accion es irreversible"}});

  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog result',result);
    if(result){
       this.eliminar()
    }
    //luego de recibir los datos los mandamos a firebase
  
  });
}

//registrar barrios a esta comuna
registrarBarrio(barrio: any){
 
}

//eliminar
eliminar(){
  this.municipioService.Eliminar(this.id).subscribe(data => {
    console.log(data);
    this.municipio = data;
    this.toastr.success(
      'Municipio eliminado correctamente',
      'Registro Eliminado!'
    );
    this.router.navigate(['/RolAdminMunicipio']);
  },
  (error) => {
    console.log(error);
    this.toastr.error(error.error.message, '¡Errors!');
  }
);
}

opcionSeleccionada(item: any){
  console.log("seleccione la opcion -> ",  item);

  switch (item) {
    case 1:
      this.modalFormulario()
      break;
      case 2:
      this.modalFormularioBarrio()
        break;
      case 3:
      this.modalEliminar()
        break;
  
    default:
      break;
  }
  
}

}

