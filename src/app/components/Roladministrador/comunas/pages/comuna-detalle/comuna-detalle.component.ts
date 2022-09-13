import { MatFabMenu } from '@angular-material-extensions/fab-menu';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ComunaService } from 'src/app/services/comuna.service';
import { ModalConfirmacionComponent } from 'src/app/shared/components/modal-confirmacion/modal-confirmacion.component';
import { ComunaComponent } from '../comuna/comuna.component';

@Component({
  selector: 'app-comuna-detalle',
  templateUrl: './comuna-detalle.component.html',
  styleUrls: ['./comuna-detalle.component.scss'],
})
export class ComunaDetalleComponent implements OnInit {
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
  comuna: any = {};
  id: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private comunaService: ComunaService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.consultarDetalle(this.id);

    //oyente de menu
    //this.matFabMenu.onFabMenuItemSelected.emit()
  }

  consultarDetalle(id: any): void {
    this.comunaService.getComuna(id).subscribe((data) => {
      console.log(data);
      this.comuna = data;
    });
  }

  //metodo para llamar al modal
  modalFormulario() {
    const dialogRef = this.dialog.open(ComunaComponent, {
      data: { titulo: 'modificar', comuna: this.comuna },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog result', result);
      if (result) {
        this.modificar(result);
      }
      //luego de recibir los datos los mandamos a firebase
    });
  }

  modalFormularioBarrio() {}

  modificar(datos: Object) {}

  modalEliminar() {
    const dialogRef = this.dialog.open(ModalConfirmacionComponent, {
      data: {
        titulo: 'Seguro desea eliminar?',
        detalle: 'esta accion es irreversible',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog result', result);
      if (result) {
        this.eliminar();
      }
      //luego de recibir los datos los mandamos a firebase
    });
  }

  //registrar barrios a esta comuna
  registrarBarrio(barrio: any) {}

  //eliminar
  eliminar() {
    this.comunaService.Eliminar(this.id).subscribe(
      (data) => {
        console.log(data);
        this.comuna = data;
        this.toastr.success(
          'Comuna eliminado correctamente',
          'Registro Eliminado!'
        );
        this.router.navigate(['/RolAdminComuna']);
      },
      (error) => {
        console.log(error);
        this.toastr.error(error.error.message, '¡Errors!');
      }
    );
  }

  opcionSeleccionada(item: any) {
    console.log('seleccione la opcion -> ', item);

    switch (item) {
      case 1:
        this.modalFormulario();
        break;
      case 2:
        this.modalFormularioBarrio();
        break;
      case 3:
        this.modalEliminar();
        break;

      default:
        break;
    }
  }
}
