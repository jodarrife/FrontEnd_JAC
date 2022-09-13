import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalConfirmacionComponent } from 'src/app/shared/components/modal-confirmacion/modal-confirmacion.component';
import { DepartamentoComponent } from '../departamento/departamento.component';
import {MatFabMenu} from '@angular-material-extensions/fab-menu';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-departamento-detalle',
  templateUrl: './departamento-detalle.component.html',
  styleUrls: ['./departamento-detalle.component.scss']
})
export class DepartamentoDetalleComponent implements OnInit {
// @ViewChild('matFabMenu', { static: false }) matFabMenu!: MatFabMenuComponent;

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
  departamento: any ={};
  id:any;
constructor(
  
  private route: ActivatedRoute,
  private router: Router,
  public dialog: MatDialog,
  private departamentoService: DepartamentoService,
  private toastr: ToastrService,
  ) { 

  }

ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id');
  this.consultarDetalle(this.id);

  //oyente de menu
  //this.matFabMenu.onFabMenuItemSelected.emit()

}

consultarDetalle(id: any): void{
  this.departamentoService.getDepartamento(id).subscribe(data => {
    console.log(data);
    this.departamento = data;
  });
}

//metodo para llamar al modal
modalFormulario(){
  const dialogRef = this.dialog.open(DepartamentoComponent,{data:  {titulo: "modificar", departamento: this.departamento}});

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
  this.departamentoService.Eliminar(this.id).subscribe(data => {
    console.log(data);
    this.departamento = data;
    this.toastr.success(
      'Departamento eliminado correctamente',
      'Registro Eliminado!'
    );
    this.router.navigate(['/RolAdminDepartamento']);
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

