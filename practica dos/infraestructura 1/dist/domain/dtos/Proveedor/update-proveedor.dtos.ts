export class UpdateProveedorDTO {
    private constructor(
      public readonly id: number,
      public readonly nombre: string,
      public readonly contacto: string,
      public readonly telefono: string,
      public readonly contratoId: number | null,
      public readonly clienteId: number | null
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.id) returnObj.id = this.id;
      if (this.nombre) returnObj.nombre = this.nombre;
      if (this.contacto) returnObj.contacto = this.contacto;
      if (this.telefono) returnObj.telefono = this.telefono;
      if (this.contratoId) returnObj.contratoId = this.contratoId;
      if (this.clienteId) returnObj.clienteId = this.clienteId;
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, UpdateProveedorDTO?] {
      const { id, nombre, contacto, telefono, contratoId, clienteId } = props;
  
      if (!id || isNaN(Number(id))) {
        return ['id must be a valid number'];
      }
  
      if (!id && !nombre && !contacto && !telefono && !contratoId && !clienteId) {
        return ['At least one property must be provided'];
      }
  
      return [undefined, new UpdateProveedorDTO(id, nombre, contacto, telefono, contratoId, clienteId)];
    }
  }
  