export class CreateServicioDto {
  private constructor(
  public readonly nombre: string,
  public readonly costo: number,
  public readonly reservaId: number,
  public readonly tipoServicioId: number,
  ) { }
  static create(props: { [key: string]: any }): [string?, CreateServicioDto?] {
    const { nombre, costo, reserva, reservaId, tipoServicioId } = props;

    if (!nombre) return ['nombre property is required', undefined];
    if (!costo) return ['costo property is required', undefined];
    if (!reservaId) return ['reservaId property is required', undefined];
    if (!tipoServicioId) return ['tipoServicioId property is required', undefined];

    return [undefined, new CreateServicioDto(nombre, costo, reservaId,tipoServicioId),];
  }
}