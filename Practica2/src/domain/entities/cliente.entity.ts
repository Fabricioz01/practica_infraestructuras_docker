export class ClienteEntity {

  constructor(
    public id: number,
    public nombre: string,
    public apellido: string,
    public correo: string,
  ) {}

  public static fromObject(object: { [key: string]: any }): ClienteEntity {
    const { id, nombre, apellido, correo } = object;

    if (!id) throw 'ID is required';
    if (!nombre) throw 'Nombre is required';
    if (!apellido) throw 'Apellido is required';
    if (!correo) throw 'Correo is required';

    return new ClienteEntity(id, nombre, apellido, correo);
  }

}
