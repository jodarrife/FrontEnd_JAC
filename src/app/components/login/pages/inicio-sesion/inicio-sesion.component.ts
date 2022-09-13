import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Habitante } from 'src/app/models/habitante';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {

  //Variable
  hide = true;
  loading=false;
  formulario!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService
    ) {
      this.formulario = this.fb.group({
        correo: ['', [Validators.required,Validators.email,Validators.maxLength(40)]],
        password: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(40)]],
      });
  }
  

  ngOnInit(): void {
    
  }

  inicioSesion(): void {
     //SOLICITUD
     this.loading=true;
     const habitante: Habitante={
       correo: this.formulario.value.correo,
       password: this.formulario.value.password,
       tipoDocumento: "ejemplo",
       numeroDocumento: "ejemplo",
       primerNombre: "ejemplo",
       segundoNombre: "ejemplo",
       primerApellido: "ejemplo",
       segundoApellido: "ejemplo",
       direccion: "ejemplo",
       telefono: "ejemplo",
       genero: "ejemplo",
       edad: 1,
       barrioId: 1,
       comunaId: 1,
       estado: "ACTIVO",
       fechaNacimiento: undefined
     }
     console.log(habitante);
     
    this.loginService.login(habitante).subscribe(data  =>{
      this.toastr.success('Bienvenido, fue logueado con exito!', 'Usuario Logueado!')
      this.loginService.setLocalStorage(data.token);
      this.router.navigate(['/home/inicio']);
      this.loading=false;
    }, error => {
      this.loading=false;
      console.log(error);
      this.toastr.error(error.error.message, "¡Errors!");
      this.formulario.reset();
    });
   
    if (this.formulario.invalid) {
      return;
    }

  }
}
