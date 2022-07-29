export class Barrio {

  barrioId: number | undefined;
  nombreBarrio: string | undefined;
  comunaId: number | undefined;
  


  constructor(barrioId: number, nombreBarrio:string,comunaId:number){
    this.barrioId=barrioId;
    this.nombreBarrio=nombreBarrio;
    this.comunaId=comunaId;
  }
  
}
