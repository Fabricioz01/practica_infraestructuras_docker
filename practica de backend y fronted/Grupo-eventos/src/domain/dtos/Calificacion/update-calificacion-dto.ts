export class UpdateCalificacionDto {

    private constructor(
      public readonly id: number,
      public readonly puntuacion: number,
      public readonly comentarios: string,
      public readonly eventoId: number,
      public readonly fechaCalificacion: Date,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.id) returnObj.id = this.id;
      if ( this.puntuacion) returnObj.puntuacion = this.puntuacion;
      if ( this.comentarios) returnObj.comentarios = this.comentarios;
      if ( this.eventoId) returnObj.eventoId = this.eventoId;
      if ( this.fechaCalificacion) returnObj.fechaCalificacion = this.fechaCalificacion;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateCalificacionDto?]  {
  
      const { id, puntuacion, comentarios,eventoId,fechaCalificacion,} = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !id && !puntuacion && !comentarios && !eventoId && !fechaCalificacion ) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateCalificacionDto(id, puntuacion, comentarios,eventoId,fechaCalificacion, )];
    }
  
  
  }