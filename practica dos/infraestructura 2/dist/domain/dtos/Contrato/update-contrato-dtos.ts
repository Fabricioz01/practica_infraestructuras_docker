export class UpdateContratoDTO {
  private constructor(
    public readonly id: number,
    public readonly fechaInicio: Date,
    public readonly fechaFinalizacion: Date,
    public readonly servicioId: number,
    public readonly tipoContrato: string,
    public readonly costoTotal: number
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.id) returnObj.id = this.id;
    if (this.fechaInicio) returnObj.fechaInicio = this.fechaInicio;
    if (this.fechaFinalizacion) returnObj.fechaFinalizacion = this.fechaFinalizacion;
    if (this.servicioId) returnObj.servicioId = this.servicioId;
    if (this.tipoContrato) returnObj.tipoContrato = this.tipoContrato;
    if (this.costoTotal) returnObj.costoTotal = this.costoTotal;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateContratoDTO?] {
    const {
      id,
      fechaInicio,
      fechaFinalizacion,
      servicioId,
      tipoContrato,
      costoTotal,
    } = props;

    if (!id || isNaN(Number(id))) {
      return ['id must be a valid number'];
    }

    if (
      !id &&
      !fechaInicio &&
      !fechaFinalizacion &&
      !servicioId &&
      !tipoContrato &&
      !costoTotal
    ) {
      return ['At least one property must be provided'];
    }

    return [
      undefined,
      new UpdateContratoDTO(
        id,
        fechaInicio,
        fechaFinalizacion,
        servicioId,
        tipoContrato,
        costoTotal
      ),
    ];
  }
}
