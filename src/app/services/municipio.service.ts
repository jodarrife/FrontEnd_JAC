import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Solicitud } from '../models/solicitud';
import { Municipio } from '../models/municipio';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  myAppUrl: string;
  MyApiUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl=environment.endpoint;
    this.MyApiUrl="/api/Municipio/";
   }
   //https://localhost:44362/api/Municipio -- POST
   SaveMunicipio(municipio: Municipio): Observable<any>{
    return this.http.post(this.myAppUrl + this.MyApiUrl, municipio);
  }
   // obtener los Departamento de ese
   getMunicipio(municipioId:any): Observable<any>{
    return this.http.get(this.myAppUrl + this.MyApiUrl + municipioId)
  }
  //obtener lista de
  GetListMunicipios(): Observable<any>{
    return this.http.get(this.myAppUrl + this.MyApiUrl);
  }
  //Eliminar 
  Eliminar(municipioId:any): Observable<any>{
    return this.http.delete(this.myAppUrl + this.MyApiUrl + municipioId);
  }
  
}
