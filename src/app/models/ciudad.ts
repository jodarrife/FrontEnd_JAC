export class Ciudad {

  ciudadId: number | undefined;
  nombreCiudad: string | undefined;
  idDepartamento: number | undefined;


  constructor(ciudadId: number, nombreCiudad:string,idDepartamento:number){
    this.ciudadId=ciudadId;
    this.nombreCiudad=nombreCiudad;
    this.idDepartamento=idDepartamento;
  }
  
}
