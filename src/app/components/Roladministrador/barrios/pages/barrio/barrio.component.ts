import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Barrio } from 'src/app/models/barrio';
import { ComunaService } from 'src/app/services/comuna.service';

@Component({
  selector: 'app-barrio',
  templateUrl: './barrio.component.html',
  styleUrls: ['./barrio.component.scss']
})
export class BarrioComponent implements OnInit {


  //Variables 
  selected = 'option0';
  listcomuna: any[]=[];
  constructor( 
    //private comunaService:ComunaService, 
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<BarrioComponent>, 
    private comunaService: ComunaService,
    @Inject(MAT_DIALOG_DATA) public datosEntrada: any
    ) {
     
   }


   ngOnInit(): void {
    this.obtenerLista();
    //this.formularioCiudad.controls['departamento'].setValue(this.datosEntrada?.comuna?.departamentoId || null)
    this.formularioBarrio.controls['nombre'].setValue(this.datosEntrada?.barrio?.nombre || null);
  }
  obtenerLista(): void{
    this.comunaService.GetLiscComunas().subscribe(data => 
      {
        this.listcomuna = data;
        console.log(data)
        
      });
  }
   //estructura para usar formulario reactivo
   formularioBarrio = new FormGroup({
    //departamento: new FormControl(null,[Validators.required]),
    nombre: new FormControl(null, [Validators.required, Validators.maxLength(40)]),
  });
  
  //al cancelar el modal
  cancelar() {
    this.dialogRef.close(null)
  }

  //al confirmar el registro
  guardar(): void {
    if (this.formularioBarrio.invalid) {
      return;
    }
    this.dialogRef.close(this.formularioBarrio.value);
  }
  
}
