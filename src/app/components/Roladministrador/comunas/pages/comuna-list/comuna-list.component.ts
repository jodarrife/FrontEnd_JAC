import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Comuna } from 'src/app/models/comuna';
import { ComunaService } from 'src/app/services/comuna.service';
import { ComunaComponent } from '../comuna/comuna.component';

@Component({
  selector: 'app-comuna-list',
  templateUrl: './comuna-list.component.html',
  styleUrls: ['./comuna-list.component.scss']
})
export class ComunaListComponent implements OnInit {

  //Variable
  loading = false;
  listComunas: any[]=[];
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
     private comunaservice: ComunaService,
  ) { }

    async ngOnInit() {
      await this.consultaComunas();
    }
    //CONSULTAR SERVICE
    async consultaComunas() {
      this.loading=true;
      this.comunaservice.GetLiscComunas().subscribe(data => 
        {
          this.loading=false;
          this.listComunas = data;
          console.log(data)
          
        });
    }
  
    
    //MODAL CREAR SERVICE
    modalFormulario() {
      const dialogRef = this.dialog.open(ComunaComponent, { 
        width: '30%',
        data: { titulo: "Registrar", comuna: null } });
      dialogRef.afterClosed().subscribe(comuna => {
        console.log('datos ', comuna);
        if (comuna) {
          //console.log(departamento);
          const comunaDTO: Comuna = {
            nombre: comuna.nombre,
            municipioId: 1
          };
          console.log(comunaDTO);
         this.comunaservice.SaveComuna(comunaDTO).subscribe(
           (data) => {
             this.toastr.success(
               'comuna agregado correctamente',
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
          this.toastr.error("Comuna no registrada", '¡Errors!');
        }
  
      });
    }
  }
