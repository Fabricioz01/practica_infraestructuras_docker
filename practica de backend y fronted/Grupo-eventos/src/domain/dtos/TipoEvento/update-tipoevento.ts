export class UpdateTipoEventoDto {

    private constructor(
      public readonly id: number,
      public readonly nombre  : string,
      public readonly descripcion  : Date,
      public readonly precioBase  : string,
      public readonly aforoMaximo  : Date,
      public readonly duracion  : number,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.id) returnObj.id = this.id;
      if ( this.nombre) returnObj.nombre = this.nombre;
      if ( this.descripcion) returnObj.descripcion = this.descripcion;
      if ( this.precioBase) returnObj.precioBase = this.precioBase;
      if ( this.aforoMaximo) returnObj.aforoMaximo = this.aforoMaximo;
      if ( this.duracion) returnObj.duracion = this.duracion;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateTipoEventoDto?]  {
  
      const { id, nombre, descripcion,precioBase,aforoMaximo,duracion} = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }  
      if ( !id && !nombre && !descripcion && !precioBase && !aforoMaximo && !duracion ) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateTipoEventoDto(id, nombre, descripcion,precioBase,aforoMaximo,duracion)];
    }
  
  
  }