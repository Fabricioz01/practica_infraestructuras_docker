export class UpdateReservaDto {
  private constructor(
    public readonly id: number,
    public readonly fechaReserva: Date,
    public readonly horaReserva: string,
    public readonly eventoId: number,
    public readonly duracionReserva: number,
    ){}
    get values() {
      const returnObj: { [key: string]: any } = {};
      if (this.id) returnObj.id = this.id;
      if (this.fechaReserva) returnObj.fechaReserva = this.fechaReserva;
      if (this.horaReserva) returnObj.horaReserva = this.horaReserva;
      if (this.eventoId) returnObj.eventoId = this.eventoId;
      if (this.duracionReserva) returnObj.duracionReserva = this.duracionReserva;
      return returnObj;
    }
  
    static create( props: {[key:string]: any} ): [string?, UpdateReservaDto?]  {
  
      const { id, fechaReserva, horaReserva, eventoId, duracionReserva} = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !id && !fechaReserva && !horaReserva && !eventoId && !duracionReserva ) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateReservaDto(id, fechaReserva, horaReserva, eventoId, duracionReserva)];
    }
  }
  