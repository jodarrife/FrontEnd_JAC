import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitanteComponent } from '../habitante/habitante.component';

@Component({
  selector: 'app-habitante-list',
  templateUrl: './habitante-list.component.html',
  styleUrls: ['./habitante-list.component.scss'],
})
export class HabitanteListComponent implements OnInit {
  //Variable
  habitantesList: any[] = [
    {
      documento: 1122,
      nombreCompleto: 'Hydrogen',
      telefono: '3004125896',
      barrioNombre: 'san1',
    },
    {
      documento: 1123,
      nombreCompleto: 'Helium',
      telefono: '3004125896',
      barrioNombre: 'san2',
    },
    {
      documento: 1124,
      nombreCompleto: 'Lithium',
      telefono: '3004125896',
      barrioNombre: 'san3',
    },
    {
      documento: 1125,
      nombreCompleto: 'Beryllium',
      telefono: '3004125896',
      barrioNombre: 'san4',
    },
    {
      documento: 1126,
      nombreCompleto: 'Boron',
      telefono: '3004125896',
      barrioNombre: 'san5',
    },
    {
      documento: 1127,
      nombreCompleto: 'Carbon',
      telefono: '3004125896',
      barrioNombre: 'san6',
    },
    {
      documento: 1128,
      nombreCompleto: 'Nitrogen',
      telefono: '3004125896',
      barrioNombre: 'san7',
    },
    {
      documento: 1129,
      nombreCompleto: 'Oxygen',
      telefono: '3004125896',
      barrioNombre: 'san8',
    },
    {
      documento: 11210,
      nombreCompleto: 'Fluorine',
      telefono: '3004125896',
      barrioNombre: 'san9',
    },
    {
      documento: 11211,
      nombreCompleto: 'Neon',
      telefono: '3004125896',
      barrioNombre: 'san10',
    },
  ];


  //filtro en tabla
  displayedColumns: string[] = [
    'documento',
    'nombreCompleto',
    'telefono',
    'barrioNombre',
    'accion'
  ];
  dataSource = new MatTableDataSource(this.habitantesList);
  //paginador
  //paginador
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //contructor
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.consultarHabitantes();
  }
  //CONSULTAR SERVICE
  async consultarHabitantes() {
    //Son servicio
    //this.departamentos = await this.comunaService.getComunasOnce()
    //Variable
  }

  //MODAL CREAR SERVICE
  modalFormulario() {
    const dialogRef = this.dialog.open(HabitanteComponent, {
      width: '40%',
      data: { titulo: 'Registrar', habitanted: null },
    });
    dialogRef.afterClosed().subscribe((habitanted) => {
      
      if (habitanted) {
        // registrar datos en firebase
        //this.comunaService.createComuna(comuna)
        //.then(() => {
        console.log('habitante registrada exitosamente');
        console.log('datos dentro if ', 'id: ',habitanted.documento,
          'nombre: ',habitanted.primerNombre + habitanted.primerApellido,
         'tel: ',habitanted.telefono,
         'barrio; ',habitanted.barrio,);
        //this.consultarComunasOnce();
        //})
        // .catch((error) => {
        //console.log("error al registrar comuna ", error);
        //})
        // this.registrarComuna(comuna)
        this.habitantesList.push({
          documento: habitanted.documento,
          nombreCompleto:  habitanted.primerNombre + ' ' + habitanted.primerApellido,
          telefono: habitanted.telefono,
          barrioNombre: habitanted.barrio
        });
      } else {
        console.log('habitante no registrada');
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
