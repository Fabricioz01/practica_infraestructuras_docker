export class CreateCalificacionDto {

    private constructor(
      public readonly puntuacion: number,
      public readonly comentarios: string,
      public readonly eventoId: number,
      public readonly fechaCalificacion: Date,
    ) { }
  
    static create(props: { [key: string]: any }): [string?, CreateCalificacionDto?] {
  
      const { puntuacion, comentarios, eventoId, fechaCalificacion, direccion,ciudad, codigoPostal, pais } = props;
  
      if (!puntuacion) return ['puntuacion  property is required', undefined];
      if (!comentarios) return ['comentarios  property is required', undefined];
      if (!eventoId) return ['eventoId  property is required', undefined];
      if (!fechaCalificacion) return ['fechaCalificacion  property is required', undefined];
  
      const fechaFormateada = `${fechaCalificacion}:00`;
      return [undefined, new CreateCalificacionDto(puntuacion, comentarios, eventoId, new Date(fechaFormateada),)];
    }
  
  
  }