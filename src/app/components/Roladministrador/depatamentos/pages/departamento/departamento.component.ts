import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Departamento } from 'src/app/models/departamento';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.scss']
})
export class DepartamentoComponent implements OnInit {

  //Variables 
  
  constructor( 
    //private comunaService:ComunaService, 
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DepartamentoComponent>, 
    @Inject(MAT_DIALOG_DATA) public datosEntrada: any
    ) {
     
   }

   ngOnInit(): void {
    this.formulario.controls['nombre'].setValue(this.datosEntrada?.comuna?.nombre || null);
  }

   //estructura para usar formulario reactivo
   formulario = new FormGroup({
    nombre: new FormControl(null, [Validators.required, Validators.maxLength(40)]),
  });
  
  //al cancelar el modal
  cancelar() {
    this.dialogRef.close(null)
  }

  //al confirmar el registro
  guardar(): void {
   
    const departamentoAux: Departamento={
      departamentoId: 1,
      nombreDepartamento: this.formulario.value.nombre
    }
    if (this.formulario.invalid) {
      return;
    }
    this.dialogRef.close(this.formulario.value);
  }
}