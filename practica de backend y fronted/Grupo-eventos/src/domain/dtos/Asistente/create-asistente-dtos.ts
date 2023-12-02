export class CreateAsistenteDTO {
    private constructor(
      public readonly nombre: string,
      public readonly correo: string,
      public readonly telefono: string,
      public readonly clienteId: number,
      public readonly metodoPagoId: number,
      
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreateAsistenteDTO?] {
      const {
        nombre,
        correo,
        telefono,
        clienteId,
        metodoPagoId,
       
      } = props;
      if (!nombre) return ['nombre property is required', undefined];
      if (!correo) return ['correo property is required', undefined];
      if (!telefono) return ['telefono property is required', undefined];
      if (!clienteId) return ['clienteId property is required', undefined];
      if (!metodoPagoId) return ['metodoPagoId property is required', undefined];
     
      return [
        undefined,
        new CreateAsistenteDTO(
          nombre,
          correo,
          telefono,
          clienteId,
          metodoPagoId,
          
        ),
      ];
    }
  }
  