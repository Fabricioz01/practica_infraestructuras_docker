export class CreatePagoDTO {
    private constructor(
      public readonly monto: number,
      public readonly fechaPago: Date,
      public readonly metodoPagoId: number,
      public readonly eventoId: number,
      public readonly clienteId: number,
     
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreatePagoDTO?] {
      const {  monto, fechaPago, metodoPagoId, eventoId, clienteId } = props;
      if (!monto) return ['monto property is required', undefined];
      if (!fechaPago) return ['fechaPago property is required', undefined];
      if (!metodoPagoId) return ['metodoPagoId property is required', undefined];
      if (!eventoId) return ['eventoId property is required', undefined];
      if (!clienteId) return ['clienteId property is required', undefined];
      // Formato "YYYY-MM-DD HH:MI:SS"
      const fechaFormateada = `${fechaPago} `;
      return [undefined, new CreatePagoDTO(monto,new Date(fechaFormateada) , metodoPagoId, eventoId, clienteId)];
    }
  }