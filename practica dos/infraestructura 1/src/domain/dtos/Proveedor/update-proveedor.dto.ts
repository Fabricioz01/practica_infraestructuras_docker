export class UpdateProveedorDto {
  private constructor(
    public readonly id: number,
    public readonly nombre?: string,
    public readonly contacto?: string,
    public readonly telefono?: string,
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.nombre !== undefined) returnObj.nombre = this.nombre;
    if (this.contacto !== undefined) returnObj.contacto = this.contacto;
    if (this.telefono !== undefined) returnObj.telefono = this.telefono;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateProveedorDto?] {
    const { id, nombre, contacto, telefono } = props;

    if (id === undefined && nombre === undefined && contacto === undefined && telefono === undefined) {
      return [
        'El ID del proveedor debe ser un número válido y al menos una propiedad debe proporcionarse',
        undefined
      ];
    }

    return [undefined, new UpdateProveedorDto(id, nombre, contacto, telefono)];
  }
}
