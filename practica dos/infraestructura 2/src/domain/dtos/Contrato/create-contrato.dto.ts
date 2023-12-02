export class CreateContratoDto {  // Cambio en el nombre de la clase
  constructor(
    public readonly fechaInicio: Date,
    public readonly fechaFinalizacion: Date,
    public readonly servicioId: number,
    public readonly tipoContrato: string,
    public readonly costoTotal: number,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateContratoDto?] {  // Cambio en el tipo de retorno

    const { fechaInicio, fechaFinalizacion, servicioId, tipoContrato, costoTotal } = props;

    if (
      fechaInicio === undefined ||
      fechaFinalizacion === undefined ||
      servicioId === undefined ||
      tipoContrato === undefined ||
      costoTotal === undefined
    ) {
      return ['Entrada no válida. Todos los campos son obligatorios.', undefined];
    }

    if (
      !(fechaInicio instanceof Date) ||
      !(fechaFinalizacion instanceof Date) ||
      typeof servicioId !== 'number' ||
      typeof tipoContrato !== 'string' ||
      typeof costoTotal !== 'number'
    ) {
      return ['Entrada no válida. Todos los campos deben ser del tipo de datos correcto.', undefined];
    }

    return [undefined, new CreateContratoDto(fechaInicio, fechaFinalizacion, servicioId, tipoContrato, costoTotal)];
  }
}
