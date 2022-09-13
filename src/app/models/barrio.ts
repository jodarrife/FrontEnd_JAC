export class Barrio {
  
  nombre: string | undefined;
  comunaId: number | undefined;

  constructor( nombre:string,comunaId:number){
    this.nombre=nombre;
    this.comunaId=comunaId;
  }
  
}
