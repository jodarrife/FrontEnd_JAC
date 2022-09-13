export class Solicitud {

  numeroDocumento: string | undefined;
  estado: string | undefined;

  constructor(numeroDocumento: string, estado:string){
    this.numeroDocumento=numeroDocumento;
    this.estado=estado;
  }
  
}
