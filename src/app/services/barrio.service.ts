import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Solicitud } from '../models/solicitud';
import { Barrio } from '../models/barrio';

@Injectable({
  providedIn: 'root'
})
export class BarrioService {

  myAppUrl: string;
  MyApiUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl=environment.endpoint;
    this.MyApiUrl="/api/Barrio/";
   }
   //https://localhost:44362/api/Barrio -- POST
   SaveBarrio(barrio: Barrio): Observable<any>{
    return this.http.post(this.myAppUrl + this.MyApiUrl, barrio);
  }
   // obtener los Departamento de ese
   GetBarrio(barrioId:any): Observable<any>{
    return this.http.get(this.myAppUrl + this.MyApiUrl + barrioId)
  }
  //obtener lista de
  GetListBarrios(): Observable<any>{
    return this.http.get(this.myAppUrl + this.MyApiUrl);
  }
  //Eliminar 
  Eliminar(barrioId:any): Observable<any>{
    return this.http.delete(this.myAppUrl + this.MyApiUrl + barrioId);
  }
  //Update 
  Update(barrio: Barrio): Observable<any>{
    return this.http.delete(this.myAppUrl + this.MyApiUrl + barrio);
  }
}
