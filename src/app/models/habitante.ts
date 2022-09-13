export class Habitante {
  tipoDocumento: string | undefined;
  numeroDocumento: string | undefined;
  primerNombre: string | undefined;
  segundoNombre: string | undefined;
  primerApellido: string | undefined;
  segundoApellido: string | undefined;

  correo: string | undefined;
  direccion: string | undefined;
  fechaNacimiento: Date | undefined;
  telefono: string | undefined;
  genero: string | undefined;
 
  edad: number | undefined;
  barrioId: number | undefined;
  comunaId: number | undefined;

  estado: string | undefined;
  password: string | undefined;

  constructor(
    tipoDocumento: string,
    numeroDocumento: string,
    primerNombre: string,
    segundoNombre: string,
    primerApellido: string,
    segundoApellido: string,
    correo: string,
    direccion: string,
    fechaNacimiento: Date,
    telefono: string,
    genero: string,
    edad: number,
    barrioId: number,
    comunaId: number,
    estado: string,
    password: string,
  ) {
    this.tipoDocumento = tipoDocumento;
    this.numeroDocumento = numeroDocumento;
    this.primerNombre = primerNombre;
    this.segundoNombre = segundoNombre;
    this.primerApellido = primerApellido;
    this.segundoApellido = segundoApellido;
    this.correo = correo;
    this.direccion = direccion;
    this.fechaNacimiento = fechaNacimiento;
    this.telefono = telefono;
    this.genero = genero;
    this.edad = edad;
    this.barrioId = barrioId;
    this.comunaId = comunaId;
    this.estado = estado;
    this.password = password;
  }
 
}
