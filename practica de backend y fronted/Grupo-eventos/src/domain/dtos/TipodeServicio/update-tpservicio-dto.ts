  export class UpdateTipoServicioDto {
    private constructor(
      public readonly id: number,
      public readonly nombre: string,
      public readonly descripcion: string,
    ){}
      get values() {
        const returnObj: { [key: string]: any } = {};
        if (this.id) returnObj.id = this.id;
        if (this.nombre) returnObj.nombre = this.nombre;
        if (this.descripcion) returnObj.descripcion = this.descripcion;
    
        return returnObj;
      }
    
      static create( props: {[key:string]: any} ): [string?, UpdateTipoServicioDto?]  {
    
        const { id, nombre, descripcion} = props;
    
        if ( !id || isNaN( Number(id)) ) {
          return ['id must be a valid number'];
        }
    
        if ( !id && !nombre && !descripcion ) {
          return ['At least one property must be provided'];
        }
        return [undefined, new UpdateTipoServicioDto(id, nombre, descripcion)];
      }
    }
    