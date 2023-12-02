export class CreatePersonaDto {

    private constructor(
      public readonly nombre: string,
      public readonly apellido: string,
      public readonly correo: string,
      public readonly telefono: string,
      public readonly direccion: string,
      public readonly ciudad: string,
      public readonly codigoPostal: string,
      public readonly pais: string,
    ) { }
  
    static create(props: { [key: string]: any }): [string?, CreatePersonaDto?] {
  
      const { nombre, apellido, correo, telefono, direccion,ciudad, codigoPostal, pais } = props;
  
      if (!nombre) return ['nombre  property is required', undefined];
      if (!apellido) return ['apellido  property is required', undefined];
      if (!correo) return ['correo  property is required', undefined];
      if (!telefono) return ['telefono  property is required', undefined];
      if (!direccion) return ['direccion  property is required', undefined];
      if (!ciudad) return ['ciudad  property is required', undefined];
      if (!codigoPostal) return ['codigoPostal  property is required', undefined];
      if (!pais) return ['pais  property is required', undefined];
  
  
      return [undefined, new CreatePersonaDto(nombre, apellido, correo, telefono, direccion, ciudad, codigoPostal, pais, )];
    }
  
  
  }