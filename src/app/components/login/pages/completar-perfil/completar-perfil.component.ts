import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
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
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Habitante } from 'src/app/models/habitante';
import { Solicitud } from 'src/app/models/solicitud';
import { BarrioService } from 'src/app/services/barrio.service';
import { ComunaService } from 'src/app/services/comuna.service';
import { HabitanteService } from 'src/app/services/habitante.service';
import { SolicitudService } from 'src/app/services/solicitud.service';
@Component({
  selector: 'app-completar-perfil',
  templateUrl: './completar-perfil.component.html',
  styleUrls: ['./completar-perfil.component.scss'],
})
export class CompletarPerfilComponent implements OnInit {
  //variabñes
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
    estado: 'INACTIVO',
    password: undefined,
  };

  mensaje: Array<any> = [{ correo: '', password: '' }];
  selectedTipoDocumento = 'option0';

  loading = false;
  correo!: any;
  password!: any;
  fecha!: any;
  edad!: any;
  fechas: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe!: any;
  estado!: any;


  listComuna: any[]=[];
  listBarrio: any[]=[];
  formularioPrimero!: FormGroup;
  formularioSegundo!: FormGroup;
  formularioTercero!: FormGroup;
  //
  constructor(
    private habitanteService: HabitanteService,
    private solicitudService: SolicitudService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private comunaService: ComunaService,
    private barrioService: BarrioService,
  ) {
    //formulario
    this.formularioPrimero = this.fb.group({
      tipoDocumento: ['', [Validators.required, Validators.maxLength(40)]],
      documento: ['', [Validators.required, Validators.maxLength(40)]],
      primerNombre: ['', [Validators.required, Validators.maxLength(40)]],
      segundoNombre: ['', [Validators.maxLength(40)]],
      primerApellido: ['', [Validators.required, Validators.maxLength(40)]],
      segundoApellido: ['', [Validators.maxLength(40)]],
    });
    //formulario
    this.formularioSegundo = this.fb.group({
      fechaNacimiento: ['', [Validators.required, Validators.maxLength(40)]],
      edad: ['', [Validators.maxLength(40)]],
      tipoGenero: ['', [Validators.required, Validators.maxLength(40)]],
      correo: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(40)],
      ],
      telefono: ['', [Validators.maxLength(40)]],
      password: ['', [Validators.required, Validators.maxLength(40)]],
    });
    //formulario
    this.formularioTercero = this.fb.group({
      estado: ['', [Validators.required, Validators.maxLength(40)]],
      direccion: ['', [Validators.required, Validators.maxLength(40)]],
      comuna: ['', [Validators.required, Validators.maxLength(40)]],
      barrio: ['', [Validators.required, Validators.maxLength(40)]],
    });
  }

  ngOnInit(): void {
    this.obtenerLista();
    this.mensaje = this.habitanteService.getArray();
    this.password = this.mensaje[0].password;
    this.correo = this.mensaje[0].correo;
    this.estado = this.habitante.estado;
    console.log(this.mensaje);
    console.log(this.estado);
  }
  obtenerLista(): void{
    this.comunaService.GetLiscComunas().subscribe(data => 
      {
        this.listComuna = data;
        console.log(data)
        
      });
      this.barrioService.GetListBarrios().subscribe(data => 
        {
          this.listBarrio = data;
          console.log(data)
          
        });
  }

  primerFormulario(): void {
    this.habitante.tipoDocumento = this.formularioPrimero.value.tipoDocumento;
    this.habitante.numeroDocumento = this.formularioPrimero.value.documento;
    this.habitante.primerNombre = this.formularioPrimero.value.primerNombre;
    this.habitante.segundoNombre = this.formularioPrimero.value.segundoNombre;
    this.habitante.primerApellido = this.formularioPrimero.value.primerApellido;
    this.habitante.segundoApellido =
      this.formularioPrimero.value.segundoApellido;
  }

  segundoFormulario(): void {
    this.habitante.fechaNacimiento =
      this.formularioSegundo.value.fechaNacimiento;
    this.habitante.genero = this.formularioSegundo.value.tipoGenero;
    this.habitante.correo = this.formularioSegundo.value.correo;
    this.habitante.telefono = this.formularioSegundo.value.telefono;
    this.habitante.password = this.formularioSegundo.value.password;
  }

  //calculo de edad
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.loading = true;
    console.log(event.value);
    this.todayWithPipe = this.pipe.transform(event.value, 'dd/MM/yyyy');

    console.log(this.todayWithPipe);
    if (this.formularioSegundo.value.fechaNacimiento) {
      const convertAge = new Date(this.formularioSegundo.value.fechaNacimiento);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.edad = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
    }
    console.log(this.edad);
    this.habitante.fechaNacimiento = this.todayWithPipe;
    this.loading = false;
    console.log('fecha: ' + this.habitante.fechaNacimiento);
  }

  registrarUsuario(): void {
    this.loading = true;
    this.habitante.comunaId = 1;
    this.habitante.barrioId = 1;
    this.habitante.direccion = this.formularioTercero.value.direccion;
    //HABITANTE
    this.habitante.edad = this.edad;
    console.log('envio habitante: ' + this.habitante);
    console.log(this.habitante);
    this.habitanteService.saveHabitante(this.habitante).subscribe(
      (data) => {
        this.loading = false;
        console.log('data habitante' + data);
        this.toastr.success(
          'El usuario ' +
            this.habitante.primerNombre +
            ' ' +
            this.habitante.primerApellido +
            ' fue agregado con exito, esperar confirmacion de aceptacion.',
          'registro realizado!'
        );
        //SOLICITUD
        const solicitud: Solicitud = {
          numeroDocumento: this.habitante.numeroDocumento,
          estado: 'ACTIVA',
        };
        this.solicitudService.saveSolicitud(solicitud).subscribe(
          (data) => {
            console.log('data solicitud' + data);
            this.toastr.success(
              'El usuario esta en espera de confirmacion.',
              'solicitud de registro realizada!'
            );
            this.router.navigate(['/authentication/login']);
            this.loading = false;
          },
          (error) => {
            this.loading = false;
            console.log(error);
            this.toastr.error(error.error.message, '¡Errors!');
          }
        );
      },
      (error) => {
        this.loading = false;
        console.log(error);
        this.toastr.error(error.error.message, '¡Errors!');
      }
    );
  }
}
