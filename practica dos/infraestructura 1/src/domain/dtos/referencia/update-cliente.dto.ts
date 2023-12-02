export class UpdateClienteDto {  // Cambio en el nombre de la clase
  private constructor(
    public readonly id: number,  // Cambio en el atributo
    public readonly nombre?: string,  // Cambio en el atributo
    public readonly apellido?: string,  // Cambio en el atributo
    public readonly correo?: string,
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.nombre !== undefined) returnObj.nombre = this.nombre;
    if (this.apellido !== undefined) returnObj.apellido = this.apellido;
    if (this.correo !== undefined) returnObj.correo = this.correo;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateClienteDto?] {  // Cambio en el tipo de retorno
    const { id, nombre, apellido, correo } = props;

    if (
      isNaN(id) ||
      (nombre === undefined && apellido === undefined && correo === undefined)
    ) {
      return [
        'El ID del cliente debe ser un número válido y al menos una propiedad debe proporcionarse',
        undefined
      ];
    }

    return [undefined, new UpdateClienteDto(id, nombre, apellido, correo)];
  }
}
