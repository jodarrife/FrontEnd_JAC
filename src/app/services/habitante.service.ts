import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habitante } from '../models/habitante';

@Injectable({
  providedIn: 'root'
})
export class HabitanteService {

 //necesitamos URL
  myAppUrl: string;
  MyApiUrl: string;
  //importamos la clase para http
  constructor(private http: HttpClient) {
    this.myAppUrl=environment.endpoint;
    this.MyApiUrl="/api/Habitante/";
   }

   public mensaje!: Array<any>;
  
  setArray(mensaje: any) {
    this.mensaje = mensaje;
  }
  
  getArray() {
    return this.mensaje;
  }
    //para peticiones Asincronas o promesas en este caso Observables
   //https://localhost:44362/api/Habitante -- POST
  saveHabitante(habitante: Habitante): Observable<any>{
    return this.http.post(this.myAppUrl + this.MyApiUrl, habitante);
  } 
  // obtener los Departamento de ese
  getHabitante(habitanteId:any): Observable<any>{
    return this.http.get(this.myAppUrl + this.MyApiUrl + habitanteId)
  }
  //obtener lista de
  GetListHabitantes(): Observable<any>{
    return this.http.get(this.myAppUrl + this.MyApiUrl);
  }
  //Eliminar 
  Eliminar(habitanteId:any): Observable<any>{
    return this.http.delete(this.myAppUrl + this.MyApiUrl + habitanteId);
  }
  
}
