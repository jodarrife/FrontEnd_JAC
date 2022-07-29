export class Comuna {

  comunaId: number | undefined;
  nombreComuna: string | undefined;
  ciudadId: number | undefined;


  constructor(comunaId: number, nombreComuna:string,ciudadId:number){
    this.comunaId=comunaId;
    this.nombreComuna=nombreComuna;
    this.ciudadId=ciudadId;
  }
  
}
