export class CreateCalificacionProveedorDto {

    private constructor(
      public readonly puntuacion: number,
      public readonly comentarios: string,
      public readonly proveedorId: number,
      public readonly fechaCalificacion: Date,
    ) { }
  
    static create(props: { [key: string]: any }): [string?, CreateCalificacionProveedorDto?] {
  
      const { puntuacion, comentarios, proveedorId, fechaCalificacion, direccion,ciudad, codigoPostal, pais } = props;
  
      if (!puntuacion) return ['puntuacion  property is required', undefined];
      if (!comentarios) return ['comentarios  property is required', undefined];
      if (!proveedorId) return ['proveedorId  property is required', undefined];
      if (!fechaCalificacion) return ['fechaCalificacion  property is required', undefined];
  
      const fechaFormateada = `${fechaCalificacion}:00`;
      return [undefined, new CreateCalificacionProveedorDto(puntuacion, comentarios, proveedorId,new Date(fechaFormateada),)];
    }
  
  
  }