export class CreateMetodoPagoDTO {
    private constructor(
      public readonly nombre: string,
     
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreateMetodoPagoDTO?] {
      const { nombre } = props;
      if (!nombre) return ['nombre property is required', undefined];
     
  
      return [undefined, new CreateMetodoPagoDTO(nombre)];
    }
  }
  