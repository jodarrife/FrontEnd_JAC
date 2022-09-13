import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.scss']
})
export class CiudadComponent implements OnInit {

  
  //Variables 
  selected = 'option0';
  listDepartamento: any[]=[];
  constructor( 
    //private comunaService:ComunaService, 
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CiudadComponent>,
    private departamentoService: DepartamentoService, 
    @Inject(MAT_DIALOG_DATA) public datosEntrada: any
    ) {
     
   }


   ngOnInit(): void {
     this.obtenerLista();
    //this.formularioCiudad.controls['departamento'].setValue(this.datosEntrada?.comuna?.departamentoId || null)
    this.formularioCiudad.controls['nombre'].setValue(this.datosEntrada?.ciudad?.nombre || null);
  }
  obtenerLista(): void{
    this.departamentoService.GetListDepartamentos().subscribe(data => 
      {
        this.listDepartamento = data;
        console.log(data)
        
      });
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
    if (this.formularioCiudad.invalid) {
      return;
    }
    this.dialogRef.close(this.formularioCiudad.value);
  }
}
