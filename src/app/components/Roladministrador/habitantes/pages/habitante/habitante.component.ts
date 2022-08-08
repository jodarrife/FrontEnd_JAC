import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-habitante',
  templateUrl: './habitante.component.html',
  styleUrls: ['./habitante.component.scss'],
})
export class HabitanteComponent implements OnInit {
  //Variables

  selectedTipoDocumento = 'option0';
  constructor(
    //private comunaService:ComunaService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<HabitanteComponent>,
    @Inject(MAT_DIALOG_DATA) public datosEntrada: any
  ) {}

  ngOnInit(): void {
    this.formularioHabitante.controls['tipoDocumento'].setValue(
      this.datosEntrada?.habitante?.documento || null
    );
    this.formularioHabitante.controls['documento'].setValue(
      this.datosEntrada?.habitante?.documento || null
    );
    this.formularioHabitante.controls['primerNombre'].setValue(
      this.datosEntrada?.habitante?.primerNombre || null
    );
    this.formularioHabitante.controls['primerApellido'].setValue(
      this.datosEntrada?.habitante?.primerApellido || null
    );
    this.formularioHabitante.controls['fechaNacimiento'].setValue(
      this.datosEntrada?.habitante?.fechaNacimiento || null
    );
    this.formularioHabitante.controls['tipoGenero'].setValue(
      this.datosEntrada?.habitante?.tipoGenero || null
    );
    this.formularioHabitante.controls['correo'].setValue(
      this.datosEntrada?.habitante?.correo || null
    );
    this.formularioHabitante.controls['barrio'].setValue(
      this.datosEntrada?.habitante?.barrio || null
    );
    this.formularioHabitante.controls['password'].setValue(
      this.datosEntrada?.habitante?.password || null
    );
  }

  //estructura para usar formulario reactivo
  formularioHabitante = new FormGroup({
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

  //al cancelar el modal
  cancelar() {
    this.dialogRef.close(null);
  }

  //al confirmar el registro
  guardar(): void {
    /* const departamentoAux: Departamento={
    departamentoId: 1,
    nombreDepartamento: this.formulario.value.nombre
  }*/
    if (this.formularioHabitante.invalid) {
      return;
    }
    console.log('enviar:' + this.formularioHabitante.value);
    this.dialogRef.close(this.formularioHabitante.value);
  }
}
