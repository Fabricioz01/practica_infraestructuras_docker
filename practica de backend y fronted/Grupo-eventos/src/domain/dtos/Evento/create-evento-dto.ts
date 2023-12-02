export class CreateEventoDto {

  private constructor(
    public readonly nombre: string,
    public readonly fecha: Date,
    public readonly hora: string,
    public readonly lugar: string,
    public readonly tipoEventoId: number,
    public readonly responsableId: number,
  ) { }

  static create(props: { [key: string]: any }): [string?, CreateEventoDto?] {
    const { nombre, fecha, hora, lugar, tipoEventoId, responsableId } = props;
  
    if (!nombre) return ['nombre property is required', undefined];
    if (!fecha) return ['fecha property is required', undefined];
    if (!hora) return ['hora property is required', undefined];
    if (!lugar) return ['lugar property is required', undefined];
    if (!tipoEventoId) return ['tipoEventoId property is required', undefined];
    if (!responsableId) return ['responsableId property is required', undefined];
  
    // Formato "YYYY-MM-DD HH:MI:SS"
    const fechaFormateada = `${fecha} ${hora}:00`;
  
    return [undefined, new CreateEventoDto(nombre, new Date(fechaFormateada), hora, lugar, tipoEventoId, responsableId)];
  }
}  
