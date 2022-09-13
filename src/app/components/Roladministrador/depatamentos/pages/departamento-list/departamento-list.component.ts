import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { DepartamentoComponent } from '../departamento/departamento.component';

@Component({
  selector: 'app-departamento-list',
  templateUrl: './departamento-list.component.html',
  styleUrls: ['./departamento-list.component.scss']
})
export class DepartamentoListComponent implements OnInit {

  //Variable
  listDepartamentos: any[]=[];
  loading = false;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private departamenService: DepartamentoService,

    private toastr: ToastrService,
  ) { }


 ngOnInit(): void {
  this.loading=true;
     this.consultarDepartamentos();
  }
  //CONSULTAR SERVICE
  consultarDepartamentos(): void {
    this.loading=true;
    this.departamenService.GetListDepartamentos().subscribe(data => 
      {
        this.loading=false;
        this.listDepartamentos = data;
        console.log(data)
        
      });
  }

 
  //MODAL CREAR SERVICE
  modalFormulario() {
    const dialogRef = this.dialog.open(DepartamentoComponent, { 
      width: '30%',
      data: { titulo: "Registrar", departamento: null }
      });
    dialogRef.afterClosed().subscribe(departamento => {
      //console.log('datos ', departamento);
      if (departamento) {
        
            //console.log(departamento);
            const departamentoDTO: Departamento = {
              nombre: departamento.nombre
            };
            console.log(departamentoDTO);
            this.loading=true;
           this.departamenService.SaveDepartamento(departamentoDTO).subscribe(
             (data) => {
              this.loading=false;
               this.toastr.success(
                 'Departamento agregado correctamente',
                 'Registro Realizado!'
               );
               console.log(data);
               this.ngOnInit();
             },
             (error) => {
              this.loading=false;
               console.log(error);
               this.toastr.error(error.error.message, '¡Errors!');
             }
           );
       //volve a llenar la lsita
       
      }else{
        this.loading=false;
        this.toastr.info("Departamento no registrada", 'OJO!');
       
      }
      
    });
    
  }
}
