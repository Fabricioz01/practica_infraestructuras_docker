export class CreateProveedorDTO {
    private constructor(
      public readonly nombre: string,
      public readonly contacto: string,
      public readonly telefono: string,
      public readonly contratoId: number | null,
      public readonly clienteId: number | null
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreateProveedorDTO?] {
      const { nombre, contacto, telefono, contratoId, clienteId } = props;
  
      if (!nombre) return ['nombre property is required', undefined];
      if (!contacto) return ['contacto property is required', undefined];
      if (!telefono) return ['telefono property is required', undefined];
  
      return [undefined, new CreateProveedorDTO(nombre, contacto, telefono, contratoId, clienteId)];
    }
  }
  