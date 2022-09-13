export class Municipio {

  nombre: string | undefined;
  departamentoId: number | undefined;

  constructor(nombre:string,departamentoId:number){
   
    this.nombre=nombre;
    this.departamentoId=departamentoId;
  }
  
}
