import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Habitante } from 'src/app/models/habitante';
import { BarrioService } from 'src/app/services/barrio.service';
import { ComunaService } from 'src/app/services/comuna.service';

@Component({
  selector: 'app-habitante',
  templateUrl: './habitante.component.html',
  styleUrls: ['./habitante.component.scss'],
})
export class HabitanteComponent implements OnInit {
  //Variables
  habitante: Habitante = {
    tipoDocumento: undefined,
    numeroDocumento: undefined,
    primerNombre: undefined,
    segundoNombre: undefined,
    primerApellido: undefined,
    segundoApellido: undefined,
    correo: undefined,
    direccion: undefined,
    fechaNacimiento: undefined,
    telefono: undefined,
    genero: undefined,
    edad: undefined,
    barrioId: undefined,
    comunaId: undefined,
    estado: 'ACTIVO',
    password: undefined,
  };
  loading = false;
  correo!: any;
  password!: any;
  fecha!: any;
  edad!: any;
  fechas: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe!: any;
  estado!: any;
  listComuna: any[] = [];
  listBarrio: any[] = [];
  formularioHabitante!: FormGroup;

  constructor(
    //private comunaService:ComunaService,
    private fb: FormBuilder,
    private comunaService: ComunaService,
    private barrioService: BarrioService,
    public dialogRef: MatDialogRef<HabitanteComponent>,
    @Inject(MAT_DIALOG_DATA) public datosEntrada: any
  ) {
    this.formularioHabitante = this.fb.group({
      tipoDocumento: ['', [Validators.required, Validators.maxLength(40)]],
      documento: ['', [Validators.required, Validators.maxLength(40)]],
      primerNombre: ['', [Validators.required, Validators.maxLength(40)]],
      segundoNombre: ['', [Validators.maxLength(40)]],
      primerApellido: ['', [Validators.required, Validators.maxLength(40)]],
      segundoApellido: ['', [Validators.maxLength(40)]],
      fechaNacimiento: ['', [Validators.required, Validators.maxLength(40)]],
      edad: ['', [Validators.maxLength(40)]],
      tipoGenero: ['', [Validators.required, Validators.maxLength(40)]],
      correo: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(40)],
      ],
      telefono: ['', [Validators.maxLength(40)]],
      password: ['', [Validators.required, Validators.maxLength(40)]],
      estado: ['', [Validators.maxLength(40)]],
      direccion: ['', [Validators.required, Validators.maxLength(40)]],
      comuna: ['', [, Validators.maxLength(40)]],
      barrio: ['', [, Validators.maxLength(40)]],
      
    });
  }

  ngOnInit(): void {
    this.obtenerLista();
    
  }

  obtenerLista(): void {
    this.comunaService.GetLiscComunas().subscribe((data) => {
      this.listComuna = data;
      console.log(data);
    });
    this.barrioService.GetListBarrios().subscribe((data) => {
      this.listBarrio = data;
      console.log(data);
    });
  }

  //al cancelar el modal
  cancelar() {
    this.dialogRef.close(null);
  }

  //calculo de edad
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.loading = true;
    console.log(event.value);
    this.todayWithPipe = this.pipe.transform(event.value, 'dd/MM/yyyy');

    console.log(this.todayWithPipe);
    if (this.formularioHabitante.value.fechaNacimiento) {
      const convertAge = new Date(
        this.formularioHabitante.value.fechaNacimiento
      );
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.edad = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
    }
    console.log(this.edad);
    this.habitante.fechaNacimiento = this.todayWithPipe;
    this.loading = false;
    console.log('fecha: ' + this.habitante.fechaNacimiento);
  }



  //al confirmar el registro
  guardar(): void {
    this.habitante.tipoDocumento = this.formularioHabitante.value.tipoDocumento;
    this.habitante.numeroDocumento = this.formularioHabitante.value.documento;
    this.habitante.primerNombre = this.formularioHabitante.value.primerNombre;
    this.habitante.segundoNombre = this.formularioHabitante.value.segundoNombre;
    this.habitante.primerApellido =      this.formularioHabitante.value.primerApellido;
    this.habitante.segundoApellido =      this.formularioHabitante.value.segundoApellido;
    this.habitante.genero = this.formularioHabitante.value.tipoGenero;
    this.habitante.correo = this.formularioHabitante.value.correo;
    this.habitante.telefono = this.formularioHabitante.value.telefono;
    this.habitante.password = this.formularioHabitante.value.password;
    this.habitante.comunaId = 1;
    this.habitante.barrioId = 1;
    this.habitante.direccion = this.formularioHabitante.value.direccion;
    this.habitante.edad = this.edad;
    this.habitante.estado = "ACRIVO";
    if (this.formularioHabitante.invalid) {
      return;
    }
    console.log('enviar:' + this.formularioHabitante.value);
    this.dialogRef.close(this.formularioHabitante.value);
    console.log(this.habitante)
  }
}
