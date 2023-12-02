export class ProveedorEntity {

  constructor(
    public id: number,
    public nombre: string,
    public contacto: string,
    public telefono: string,
  ) {}

  public static fromObject(object: { [key: string]: any }): ProveedorEntity {
    const { id, nombre, contacto, telefono } = object;
    
    if (!id) throw 'ID is required';
    if (!nombre) throw 'Nombre is required';
    if (!contacto) throw 'Contacto is required';
    if (!telefono) throw 'Telefono is required';

    return new ProveedorEntity(id, nombre, contacto, telefono);
  }
}
