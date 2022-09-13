import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Barrio } from 'src/app/models/barrio';
import { BarrioService } from 'src/app/services/barrio.service';
import { BarrioComponent } from '../barrio/barrio.component';

@Component({
  selector: 'app-barrio-list',
  templateUrl: './barrio-list.component.html',
  styleUrls: ['./barrio-list.component.scss']
})
export class BarrioListComponent implements OnInit {

 
   //Variable
   loading = false;
   listBarrios: any[]=[
    
  ];
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private barrioService: BarrioService,
  ) { }

    async ngOnInit() {
      await this.consultaCiudades();
    }
    //CONSULTAR SERVICE
    async consultaCiudades() {
      this.loading=true;
    this.barrioService.GetListBarrios().subscribe(data => 
      {
        this.loading=false;
        this.listBarrios = data;
        console.log(data)
        
      });
    }
  
    
    //MODAL CREAR SERVICE
    modalFormulario() {
      const dialogRef = this.dialog.open(BarrioComponent, { 
        width: '30%',
        data: { titulo: "Registrar", barrio: null } });
      dialogRef.afterClosed().subscribe(barrio => {
        console.log('datos ', barrio);
        if (barrio) {
          //console.log(departamento);
          const barrioDTO: Barrio = {
            nombre: barrio.nombre,
            comunaId: 1
          };
          console.log(barrioDTO);
         this.barrioService.SaveBarrio(barrioDTO).subscribe(
           (data) => {
             this.toastr.success(
               'Barrio agregado correctamente',
               'Registro Realizado!'
             );
             console.log(data);
             this.ngOnInit();
           },
           (error) => {
             console.log(error);
             this.toastr.error(error.error.message, '¡Errors!');
           }
         );
     //volve a llenar la lsita 
    
        }else{
          this.toastr.error("Barrio no registrada", '¡Errors!');
       
        }
  
      });
    }
  }