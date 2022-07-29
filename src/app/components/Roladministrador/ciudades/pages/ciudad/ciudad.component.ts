import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ciudad } from 'src/app/models/ciudad';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.scss']
})
export class CiudadComponent implements OnInit {

  
  //Variables 
  selected = 'option0';

  constructor( 
    //private comunaService:ComunaService, 
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CiudadComponent>, 
    @Inject(MAT_DIALOG_DATA) public datosEntrada: any
    ) {
     
   }


   ngOnInit(): void {
    //this.formularioCiudad.controls['departamento'].setValue(this.datosEntrada?.comuna?.departamentoId || null)
    this.formularioCiudad.controls['nombre'].setValue(this.datosEntrada?.comuna?.nombre || null);
  }

   //estructura para usar formulario reactivo
   formularioCiudad = new FormGroup({
    //departamento: new FormControl(null,[Validators.required]),
    nombre: new FormControl(null, [Validators.required, Validators.maxLength(40)]),
  });
  
  //al cancelar el modal
  cancelar() {
    this.dialogRef.close(null)
  }

  //al confirmar el registro
  guardar(): void {
   
    const ciudadAux: Ciudad={
      ciudadId: 1,
      nombreCiudad: this.formularioCiudad.value.nombre,
      departamentoId:1
    }
    if (this.formularioCiudad.invalid) {
      return;
    }
    this.dialogRef.close(this.formularioCiudad.value);
  }
}
