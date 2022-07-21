export class Departamento {

  departamentoId: number | undefined;
  nombreDepartamento: string | undefined;


  constructor(departamentoId: number, nombreDepartamento:string){
    this.departamentoId=departamentoId;
    this.nombreDepartamento=nombreDepartamento;
  }
  
}
