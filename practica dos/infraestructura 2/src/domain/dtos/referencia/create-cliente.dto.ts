export class CreateClienteDto {  // Cambio en el nombre de la clase
  constructor(
    public readonly nombre: string,  // Cambio en el atributo
    public readonly apellido: string,  // Cambio en el atributo
    public readonly correo: string,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateClienteDto?] {  // Cambio en el tipo de retorno

    const { nombre, apellido, correo } = props;

    if (
      !nombre ||
      !apellido ||
      !correo ||
      typeof nombre !== 'string' ||
      typeof apellido !== 'string' ||
      typeof correo !== 'string'
    ) {
      return [
        'Entrada no válida. Todos los campos son obligatorios y deben ser cadenas de texto.',
        undefined
      ];
    }

    return [undefined, new CreateClienteDto(nombre, apellido, correo)];
  }
}
