export class UpdatePagoDto {

    private constructor(
        public readonly id: number,
        public readonly monto: string, 
        public readonly fechaPago: Date, 
        public readonly metodoPagoId: number, 
        public readonly eventoId: number,
        public readonly clienteId: number,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.id) returnObj.id = this.id;
      if ( this.monto) returnObj.monto = this.monto;
      if ( this.fechaPago) returnObj.fechaPago = this.fechaPago;
      if ( this.metodoPagoId) returnObj.metodoPagoId = this.metodoPagoId;
      if ( this.eventoId) returnObj.eventoId = this.eventoId;
      if ( this.clienteId) returnObj.clienteId = this.clienteId;
      return returnObj;
    }
  
    static create( props: {[key:string]: any} ): [string?, UpdatePagoDto?]  {
  
      const { id, monto, fechaPago,metodoPagoId,eventoId,clienteId} = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }  
      if ( !id && !monto && !fechaPago && !metodoPagoId && !eventoId && !clienteId ) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdatePagoDto(id, monto, fechaPago,metodoPagoId,eventoId,clienteId)];
    }
  
  
  }