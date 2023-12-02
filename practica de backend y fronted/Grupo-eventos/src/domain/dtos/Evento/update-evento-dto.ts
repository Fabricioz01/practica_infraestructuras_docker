export class UpdateEventoDto {

    private constructor(
      public readonly id: number,
      public readonly nombre  : string,
      public readonly fecha  : Date,
      public readonly hora  : string,
      public readonly lugar  : Date,
      public readonly tipoEventoId  : number,
      public readonly responsableId : number,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.id) returnObj.id = this.id;
      if ( this.nombre) returnObj.nombre = this.nombre;
      if ( this.hora) returnObj.hora = this.hora;
      if ( this.lugar) returnObj.lugar = this.lugar;
      if ( this.tipoEventoId) returnObj.tipoEventoId = this.tipoEventoId;
      if ( this.responsableId) returnObj.responsableId = this.responsableId;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateEventoDto?]  {
  
      const { id, nombre, fecha,hora,lugar,tipoEventoId,responsableId,idDatos_personal_prof} = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !id && !nombre && !fecha && !hora && !lugar && !tipoEventoId && !responsableId && !idDatos_personal_prof) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateEventoDto(id, nombre, fecha,hora,lugar,tipoEventoId,responsableId,)];
    }
  
  
  }