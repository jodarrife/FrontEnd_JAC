import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Solicitud } from '../models/solicitud';
import { Comuna } from '../models/comuna';

@Injectable({
  providedIn: 'root'
})
export class ComunaService {

  myAppUrl: string;
  MyApiUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl=environment.endpoint;
    this.MyApiUrl="/api/Comuna/";
   }
   //https://localhost:44362/api/Comuna -- POST
   SaveComuna(comuna: Comuna): Observable<any>{
    return this.http.post(this.myAppUrl + this.MyApiUrl, comuna);
  }
   // obtener los Departamento de ese
   getComuna(comunaId:any): Observable<any>{
    return this.http.get(this.myAppUrl + this.MyApiUrl + comunaId)
  }
  //obtener lista de
  GetLiscComunas(): Observable<any>{
    return this.http.get(this.myAppUrl + this.MyApiUrl);
  }
   //Eliminar 
   Eliminar(comunaId:any): Observable<any>{
    return this.http.delete(this.myAppUrl + this.MyApiUrl + comunaId);
  }
}
