export class UpdateContratoDto {  // Cambio en el nombre de la clase
  private constructor(
    public readonly fechaInicio?: Date,
    public readonly fechaFinalizacion?: Date,
    public readonly servicioId?: number,
    public readonly tipoContrato?: string,
    public readonly costoTotal?: number,
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.fechaInicio !== undefined) returnObj.fechaInicio = this.fechaInicio;
    if (this.fechaFinalizacion !== undefined) returnObj.fechaFinalizacion = this.fechaFinalizacion;
    if (this.servicioId !== undefined) returnObj.servicioId = this.servicioId;
    if (this.tipoContrato !== undefined) returnObj.tipoContrato = this.tipoContrato;
    if (this.costoTotal !== undefined) returnObj.costoTotal = this.costoTotal;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateContratoDto?] {  // Cambio en el tipo de retorno
    const { fechaInicio, fechaFinalizacion, servicioId, tipoContrato, costoTotal } = props;

    if (
      (fechaInicio !== undefined && !(fechaInicio instanceof Date)) ||
      (fechaFinalizacion !== undefined && !(fechaFinalizacion instanceof Date)) ||
      (servicioId !== undefined && typeof servicioId !== 'number') ||
      (tipoContrato !== undefined && typeof tipoContrato !== 'string') ||
      (costoTotal !== undefined && typeof costoTotal !== 'number')
    ) {
      return ['Entrada no válida. Los campos deben ser del tipo de datos correcto.', undefined];
    }

    return [undefined, new UpdateContratoDto(fechaInicio, fechaFinalizacion, servicioId, tipoContrato, costoTotal)];
  }
}
