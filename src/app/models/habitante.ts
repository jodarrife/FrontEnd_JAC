export class Habitante {
  tipoDocumento: string | undefined;
  documento: number | undefined;
  primerNombre: string | undefined;
  segundoNombre: string | undefined;
  primerApellido: string | undefined;
  segundoApellido: string | undefined;
  fechaNacimiento: Date | undefined;
  tipoGenero: string | undefined;
  correo: string | undefined;
  barrioId: number | undefined;
  password: string | undefined;

  constructor(
    tipoDocumento: string,
    documento: number,
    primerNombre: string,
    segundoNombre: string,
    primerApellido: string,
    segundoApellido: string,
    fechaNacimiento: Date,
    tipoGenero: string,
    correo: string,
    barrioId: number,
    password: string
  ) {
    this.tipoDocumento = tipoDocumento;
    this.documento = documento;
    this.primerNombre = primerNombre;
    this.segundoNombre = segundoNombre;
    this.primerApellido = primerApellido;
    this.segundoApellido = segundoApellido;
    this.fechaNacimiento = fechaNacimiento;
    this.tipoGenero = tipoGenero;
    this.correo = correo;
    this.barrioId = barrioId;
    this.password = password;
  }
}
