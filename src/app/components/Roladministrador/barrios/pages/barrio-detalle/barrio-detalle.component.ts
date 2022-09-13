import { MatFabMenu } from '@angular-material-extensions/fab-menu';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BarrioService } from 'src/app/services/barrio.service';
import { ModalConfirmacionComponent } from 'src/app/shared/components/modal-confirmacion/modal-confirmacion.component';
import { BarrioComponent } from '../barrio/barrio.component';
import { ToastrService } from 'ngx-toastr';
import { Barrio } from 'src/app/models/barrio';
@Component({
  selector: 'app-barrio-detalle',
  templateUrl: './barrio-detalle.component.html',
  styleUrls: ['./barrio-detalle.component.scss'],
})
export class BarrioDetalleComponent implements OnInit {
  displayedColumns = ['index', 'nombre', 'estrato', 'numeroHabitantes'];

  fabButtonsRandom: MatFabMenu[] = [
    {
      id: 1,
      icon: 'create',
      tooltip: 'editar',
      tooltipPosition: 'left',
    },
    {
      id: 2,
      icon: 'location_city',
      tooltip: 'Registrar barrio',
      tooltipPosition: 'left',
    },
    {
      id: 3,
      icon: 'delete',
      tooltip: 'eliminar',
      tooltipPosition: 'left',
    },
  ];
  //variables
  barrio: any = {};
  id:any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private barroService: BarrioService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ngoint');
    this.consultarDetalle(this.id);
  }
  
  consultarDetalle(id: any): void{
    this.barroService.GetBarrio(id).subscribe(data => {
      console.log(data);
      this.barrio = data;
      console.log('data');
      console.log(data);
    });
  }
  
  //metodo para llamar al modal
  modalFormulario(){
    const dialogRef = this.dialog.open(BarrioComponent,
      {data:  {titulo: "modificar", barrio: this.barrio}});
  
    dialogRef.afterClosed().subscribe(barrio => {
      if(barrio){
        const barrioDTO: Barrio = {
          nombre: barrio.nombre,
          comunaId: 1
        };

        this.barroService.Update(barrioDTO).subscribe(data => {
          this.barrio = data;
          this.toastr.success(
            'Barrio Modificado correctamente',
            'Registro Modificado!'
          );
          this.router.navigate(['/RolAdminBarrio']);
        },
        (error) => {
          console.log(error);
          this.toastr.error(error.error.message, '¡Errors!');
        }
      );
        this.modificar(barrioDTO);
      
      }
      //luego de recibir los datos los mandamos a firebase
  
    });
  }
  
  modalFormularioBarrio(){
    
  }
  
  modificar(datos: any) {
   
    
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
    this.barroService.Eliminar(this.id).subscribe(data => {
      console.log(data);
      this.toastr.success(
        'Barrio eliminado correctamente',
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
  
  