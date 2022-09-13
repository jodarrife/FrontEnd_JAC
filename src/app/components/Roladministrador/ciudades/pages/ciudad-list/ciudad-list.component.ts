import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Municipio } from 'src/app/models/municipio';
import { MunicipioService } from 'src/app/services/municipio.service';
import { CiudadComponent } from '../ciudad/ciudad.component';

@Component({
  selector: 'app-ciudad-list',
  templateUrl: './ciudad-list.component.html',
  styleUrls: ['./ciudad-list.component.scss']
})
export class CiudadListComponent implements OnInit {

   //Variable
   listMunicipios: any[]=[];
   loading = false;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private municipioService: MunicipioService,
  ) { }

    async ngOnInit() {
      await this.consultaCiudades();
    }
    //CONSULTAR SERVICE
    async consultaCiudades() {
      this.loading=true;
      this.municipioService.GetListMunicipios().subscribe(data => 
        {
          this.loading=false;
          this.listMunicipios = data;
          console.log(data)
          
        });
    }
  
    
    //MODAL CREAR SERVICE
    modalFormulario() {
      const dialogRef = this.dialog.open(CiudadComponent, { 
        width: '30%',
        data: { titulo: "Registrar", ciudad: null } });
      dialogRef.afterClosed().subscribe(ciudad => {
        console.log('datos ', ciudad);
        if (ciudad) {
         
            //console.log(departamento);
            const municipioDTO: Municipio = {
              nombre: ciudad.nombre,
              departamentoId: 1
            };
            console.log(municipioDTO);
           this.municipioService.SaveMunicipio(municipioDTO).subscribe(
             (data) => {
               this.toastr.success(
                 'Municipio agregado correctamente',
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
          this.toastr.error("Municipio no registrada", '¡Errors!');
        }
  
      });
    }
  }