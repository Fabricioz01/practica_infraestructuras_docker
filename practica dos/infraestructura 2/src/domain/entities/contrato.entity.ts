export class ContratoEntity {

  constructor(
    public id: number,
    public readonly fechaInicio: Date,
    public readonly fechaFinalizacion: Date,
    public readonly servicioId: number,
    public readonly tipoContrato: string,
    public readonly costoTotal: number,
  ) {}

  public static fromObject(object: { [key: string]: any }): ContratoEntity {
    const { id, fechaInicio, fechaFinalizacion, servicioId, tipoContrato, costoTotal } = object;

    if (!id) throw 'ID is required';
    if (!fechaInicio) throw 'Fecha de inicio is required';
    if (!fechaFinalizacion) throw 'Fecha de finalización is required';
    if (!servicioId) throw 'ID de servicio is required';
    if (!tipoContrato) throw 'Tipo de contrato is required';
    if (!costoTotal) throw 'Costo total is required';

    return new ContratoEntity(id, fechaInicio, fechaFinalizacion, servicioId, tipoContrato, costoTotal);
  }

}

  
  