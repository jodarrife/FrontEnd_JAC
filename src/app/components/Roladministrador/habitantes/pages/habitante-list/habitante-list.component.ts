import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Habitante } from 'src/app/models/habitante';
import { HabitanteService } from 'src/app/services/habitante.service';
import { HabitanteComponent } from '../habitante/habitante.component';

@Component({
  selector: 'app-habitante-list',
  templateUrl: './habitante-list.component.html',
  styleUrls: ['./habitante-list.component.scss'],
})
export class HabitanteListComponent implements OnInit {
  //Variable

  listHabitante: any[] = [];

  //filtro en tabla
  displayedColumns: string[] = [
    'tipoDocumento',
    'numeroDocumento',
    'nombreApellido',
    'correo',
    'direccion',
    'telefono',
    'genero',
    'edad',
    'accion',
  ];
  dataSource!: MatTableDataSource<any>;
  //paginador
  //paginador
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  //contructor
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private habitanteService: HabitanteService
  ) {}

  async ngOnInit() {
    await this.consultarHabitantes();
  }
  //CONSULTAR SERVICE
  async consultarHabitantes() {
    this.habitanteService.GetListHabitantes().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.listHabitante);
    });
  }

  //MODAL CREAR SERVICE
  modalFormulario() {
    const dialogRef = this.dialog.open(HabitanteComponent, {
      width: '40%',
      data: { titulo: 'Registrar', habitanted: null },
    });
    dialogRef.afterClosed().subscribe((habitanted) => {
      if (habitanted) {
        console.log(habitanted);
        const habitante: Habitante = {
          tipoDocumento: habitanted.tipoDocumento,
          numeroDocumento: habitanted.numeroDocumento,
          primerNombre: habitanted.primerNombre,
          segundoNombre: habitanted.segundoNombre,
          primerApellido: habitanted.primerApellido,
          segundoApellido: habitanted.segundoApellido,
          correo: habitanted.correo,
          direccion: habitanted.direccion,
          fechaNacimiento: habitanted.fechaNacimiento,
          telefono: habitanted.telefono,
          genero: habitanted.genero,
          edad: habitanted.edad,
          barrioId: habitanted.barrioId,
          comunaId: habitanted.comunaId,
          estado: habitanted.estado,
          password: habitanted.password,
        };
        this.habitanteService.saveHabitante(habitante).subscribe(
          (data) => {
            console.log('data habitante' + data);
            this.toastr.success(
              'El usuario ' +
                habitante.primerNombre +
                ' ' +
                habitante.primerApellido +
                ' fue agregado con exito.',
              'registro realizado!'
            );
            this.ngOnInit();
          },
          (error) => {
            console.log(error);
            this.toastr.error(error.error.message, '¡Errors!');
          }
        );
      } else {
        this.toastr.success(
          'No se pudo agregar habitante',
          'registro rechazado!'
        );
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
