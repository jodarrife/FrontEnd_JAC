import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Comuna } from 'src/app/models/comuna';
import { MunicipioService } from 'src/app/services/municipio.service';

@Component({
  selector: 'app-comuna',
  templateUrl: './comuna.component.html',
  styleUrls: ['./comuna.component.scss']
})
export class ComunaComponent implements OnInit {


  //Variables 
  selected = 'option0';
  listMunicipio: any[]=[];
  constructor( 
    //private comunaService:ComunaService, 
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ComunaComponent>, 
    private municipioService: MunicipioService,
    @Inject(MAT_DIALOG_DATA) public datosEntrada: any
    ) {
     
   }


   ngOnInit(): void {
    this.obtenerLista();
    //this.formularioCiudad.controls['departamento'].setValue(this.datosEntrada?.comuna?.departamentoId || null)
    this.formularioComuna.controls['nombre'].setValue(this.datosEntrada?.comuna?.nombre || null);
  }
  obtenerLista(): void{
    this.municipioService.GetListMunicipios().subscribe(data => 
      {
        this.listMunicipio = data;
        console.log(data)
        
      });
  }
   //estructura para usar formulario reactivo
   formularioComuna = new FormGroup({
    //departamento: new FormControl(null,[Validators.required]),
    nombre: new FormControl(null, [Validators.required, Validators.maxLength(40)]),
  });
  
  //al cancelar el modal
  cancelar() {
    this.dialogRef.close(null)
  }

  //al confirmar el registro
  guardar(): void {
   
    if (this.formularioComuna.invalid) {
      return;
    }
    this.dialogRef.close(this.formularioComuna.value);
  }
}