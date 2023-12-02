export class UpdateCalificacionProveedorDto {

    private constructor(
      public readonly id: number,
      public readonly puntuacion: number,
      public readonly comentarios: string,
      public readonly proveedorId: number,
      public readonly fechaCalificacion: Date,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.id) returnObj.id = this.id;
      if ( this.puntuacion) returnObj.puntuacion = this.puntuacion;
      if ( this.comentarios) returnObj.comentarios = this.comentarios;
      if ( this.proveedorId) returnObj.proveedorId = this.proveedorId;
      if ( this.fechaCalificacion) returnObj.fechaCalificacion = this.fechaCalificacion;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateCalificacionProveedorDto?]  {
  
      const { id, puntuacion, comentarios,proveedorId,fechaCalificacion,} = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !id && !puntuacion && !comentarios && !proveedorId && !fechaCalificacion ) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateCalificacionProveedorDto(id, puntuacion, comentarios,proveedorId,fechaCalificacion, )];
    }
  
  
  }