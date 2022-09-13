import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Solicitud } from '../models/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  myAppUrl: string;
  MyApiUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl=environment.endpoint;
    this.MyApiUrl="/api/Solicitud/";
   }
   //https://localhost:44362/api/habitante -- POST
  saveSolicitud(solicitud: Solicitud): Observable<any>{
    return this.http.post(this.myAppUrl + this.MyApiUrl, solicitud);
  }
    // obtener los Departamento de ese
    getSolicitud(solicitudId:any): Observable<any>{
      return this.http.get(this.myAppUrl + this.MyApiUrl + solicitudId)
    }
    //obtener lista de
    GetListSolicitudes(): Observable<any>{
      return this.http.get(this.myAppUrl + this.MyApiUrl);
    }
    //Eliminar 
  Eliminar(solicitudId:any): Observable<any>{
    return this.http.delete(this.myAppUrl + this.MyApiUrl + solicitudId);
  }
}
