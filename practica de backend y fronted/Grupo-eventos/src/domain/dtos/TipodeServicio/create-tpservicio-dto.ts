export class CreatetpservicioDto {
    private constructor(
      public nombre: string,
      public descripcion: string,
    ){}
      static create(props: { [key: string]: any }): [string?, CreatetpservicioDto?] {
        const { nombre, descripcion } = props;
    
        if (!nombre) return ['nombre property is required', undefined];
        if (!descripcion) return ['descripcion property is required', undefined];
    
        return [undefined, new CreatetpservicioDto(nombre, descripcion)];
      }
    }