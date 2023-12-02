export class UpdateServicioDto {
  private constructor(
  public readonly id: number,
  public readonly nombre: string,
  public readonly costo: number,
  public readonly reservaId: number,
  public readonly tipoServicioId: number,
  ){}
  get values() {
    const returnObj: { [key: string]: any } = {};
    if (this.id) returnObj.id = this.id;
    if (this.nombre) returnObj.nombre = this.nombre;
    if (this.costo) returnObj.costo = this.costo;
    if (this.reservaId) returnObj.reservaId = this.reservaId;
    if (this.tipoServicioId) returnObj.tipoServicioId = this.tipoServicioId;
    
    return returnObj;
  }
  
  static create( props: {[key:string]: any} ): [string?, UpdateServicioDto?]  {
  
    const { id, nombre, costo, reservaId, tipoServicioId} = props;

    if ( !id || isNaN( Number(id)) ) {
      return ['id must be a valid number'];
    }

    if ( !id && !nombre && !costo && !reservaId && !tipoServicioId ) {
      return ['At least one property must be provided'];
    }
    return [undefined, new UpdateServicioDto(id, nombre, costo, reservaId, tipoServicioId)];
  }
}