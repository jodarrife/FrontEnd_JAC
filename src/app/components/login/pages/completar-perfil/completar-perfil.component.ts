import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-completar-perfil',
  templateUrl: './completar-perfil.component.html',
  styleUrls: ['./completar-perfil.component.scss']
 
})
export class CompletarPerfilComponent implements OnInit {

 


  selectedTipoDocumento = 'option0';
  constructor(
    //private comunaService:ComunaService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
  
  }

  //estructura para usar formulario reactivo
  formularioPrimero = new FormGroup({
    tipoDocumento: new FormControl(null, [
      Validators.required,
      Validators.maxLength(40),
    ]),
    documento: new FormControl(null, [
      Validators.required,
      Validators.maxLength(40),
    ]),
    primerNombre: new FormControl(null, [
      Validators.required,
      Validators.maxLength(40),
    ]),
    segundoNombre: new FormControl(null, [Validators.maxLength(40)]),
    primerApellido: new FormControl(null, [
      Validators.required,
      Validators.maxLength(40),
    ]),
    segundoApellido: new FormControl(null, [Validators.maxLength(40)]),
    
   
  });
   //estructura para usar formulario reactivo
   formularioSegundo = new FormGroup({
    fechaNacimiento: new FormControl(null, [
      Validators.required,
      Validators.maxLength(40),
    ]),
    tipoGenero: new FormControl(null, [
      Validators.required,
      Validators.maxLength(40),
    ]),
    correo: new FormControl(null, [
      Validators.required,
      Validators.maxLength(40),
    ]),
    telefono: new FormControl(null, [Validators.maxLength(40)]),
    barrio: new FormControl(null, [
      Validators.required,
      Validators.maxLength(40),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.maxLength(40),
    ]),
  });
}
  

