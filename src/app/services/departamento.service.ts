import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Solicitud } from '../models/solicitud';
import { Departamento } from '../models/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  myAppUrl: string;
  MyApiUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl=environment.endpoint;
    this.MyApiUrl="/api/Departamento/";
   }
   //https://localhost:44362/api/Departamento -- POST
   SaveDepartamento(departamento: Departamento): Observable<any>{
    return this.http.post(this.myAppUrl + this.MyApiUrl, departamento);
  }
  //
   // obtener los Departamento de ese
  getDepartamento(departamentoId:any): Observable<any>{
    return this.http.get(this.myAppUrl + this.MyApiUrl + departamentoId)
  }
  //obtener lista de
  GetListDepartamentos(): Observable<any>{
    return this.http.get(this.myAppUrl + this.MyApiUrl);
  }
  //Eliminar 
  Eliminar(departamentoId:any): Observable<any>{
    return this.http.delete(this.myAppUrl + this.MyApiUrl + departamentoId);
  }
}
