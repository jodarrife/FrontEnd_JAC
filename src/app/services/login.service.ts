import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habitante } from '../models/habitante';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  myAppUrl: string;
  MyApiUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl=environment.endpoint;
    this.MyApiUrl="/api/Login";
   }
   //https://localhost:44362/api/login -- POST
  login(habitante: Habitante): Observable<any>{
    return this.http.post(this.myAppUrl + this.MyApiUrl, habitante);
  }

  //datos persistentes con localStorage
  setLocalStorage(data: string): void {
    localStorage.setItem('token', data);
  }
  
  getTokenDecoded(): any {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(localStorage.getItem('token')!);
    return decodedToken;
  }
  
   //eliminar valores en local storage
   removeLocalStorage(): void{
    localStorage.removeItem('token');
  }
  //obtener datos del localStorage
  // getNombreUsuario(): string{
   // return localStorage.getItem('nombreUsuario')!;
  //}
  
}
