export class CreateProveedorDto {
  constructor(
    public readonly nombre: string,
    public readonly contacto: string,
    public readonly telefono: string,
  ) {}

  static create(props: {
    nombre: string;
    contacto: string;
    telefono: string;
  }): [string?, CreateProveedorDto?] {
    const { nombre, contacto, telefono } = props;

    if (
      !nombre ||
      !contacto ||
      !telefono ||
      typeof nombre !== 'string' ||
      typeof contacto !== 'string' ||
      typeof telefono !== 'string'
    ) {
      return [
        'Entrada no válida. El nombre, contacto y teléfono son obligatorios, y deben ser cadenas de texto.',
        undefined
      ];
    }

    return [undefined, new CreateProveedorDto(nombre, contacto, telefono)];
  }
}
