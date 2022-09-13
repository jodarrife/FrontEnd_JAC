import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HabitanteService } from 'src/app/services/habitante.service';
@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss'],
})
export class RegistrarseComponent implements OnInit {
  //Variable
  hide = true;
  hideDos = true;
  loading= false;
  formulario!: FormGroup;
  mensaje!: Array<any>;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private habitanteService: HabitanteService
  ) {
    
    //formulario
    this.formulario = this.fb.group(
      {
        email: ['',[Validators.required, Validators.email, Validators.maxLength(40)],],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(40),
          ],
        ],
        passwordConfirmar: [''],
      },
      { validator: this.checkPassword }
    );
  }

  ngOnInit(): void {
    
    
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls['password'].value;
    const confirmPass = group.controls['passwordConfirmar'].value;
    return pass === confirmPass ? null : { notSame: true };
  }

  registrarUsuario(): void {
    this.loading = true;
    this.mensaje =[
      {correo: this.formulario.value.email, 
        password: this.formulario.value.password}
    ];
    
    //Enviar info
    this.habitanteService.setArray(this.mensaje);
    this.loading = false;
    this.router.navigate(['/authentication/completarPerfil']);
  }
}
