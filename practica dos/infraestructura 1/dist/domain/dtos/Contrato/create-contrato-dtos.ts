export class CreateContratoDTO {
  private constructor(
    public readonly fechaInicio: Date,
    public readonly fechaFinalizacion: Date,
    public readonly servicioId: number,
    public readonly tipoContrato: string,
    public readonly costoTotal: number
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateContratoDTO?] {
    const {
      fechaInicio,
      fechaFinalizacion,
      servicioId,
      tipoContrato,
      costoTotal,
    } = props;

    if (!fechaInicio) return ['fechaInicio property is required', undefined];
    if (!fechaFinalizacion) return ['fechaFinalizacion property is required', undefined];
    if (!servicioId || isNaN(Number(servicioId))) return ['servicioId must be a valid number', undefined];
    if (!tipoContrato) return ['tipoContrato property is required', undefined];
    if (!costoTotal || isNaN(Number(costoTotal))) return ['costoTotal must be a valid number', undefined];

    return [
      undefined,
      new CreateContratoDTO(
        fechaInicio,
        fechaFinalizacion,
        servicioId,
        tipoContrato,
        costoTotal
      ),
    ];
  }
}
