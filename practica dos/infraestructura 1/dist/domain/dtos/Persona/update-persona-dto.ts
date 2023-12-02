export class UpdatePersonaDto {

    private constructor(
      public readonly id: number,
      public readonly nombre  : string,
      public readonly apellido  : string,
      public readonly correo  : string,
      public readonly telefono  : string,
      public readonly direccion  : string,
      public readonly ciudad  : string,
      public readonly codigoPostal  : string,
      public readonly pais  : string,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.id) returnObj.id = this.id;
      if ( this.nombre) returnObj.nombre = this.nombre;
      if ( this.apellido) returnObj.apellido = this.apellido;
      if ( this.correo) returnObj.correo = this.correo;
      if ( this.telefono) returnObj.telefono = this.telefono;
      if ( this.direccion) returnObj.direccion = this.direccion;
      if ( this.ciudad) returnObj.ciudad = this.ciudad;
      if ( this.codigoPostal) returnObj.codigoPostal = this.codigoPostal;
      if ( this.pais) returnObj.pais = this.pais;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdatePersonaDto?]  {
  
      const { id, nombre, apellido,correo,telefono,direccion, ciudad, codigoPostal, pais} = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !id && !nombre && !apellido && !correo && !telefono && !direccion && !ciudad && !codigoPostal && !pais ) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdatePersonaDto(id, nombre, apellido,correo,telefono,direccion, ciudad, codigoPostal, pais, )];
    }
  
  
  }