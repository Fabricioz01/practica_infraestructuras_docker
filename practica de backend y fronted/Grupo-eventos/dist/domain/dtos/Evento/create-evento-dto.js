"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEventoDto = void 0;
class CreateEventoDto {
    constructor(nombre, fecha, hora, lugar, tipoEventoId, responsableId) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.hora = hora;
        this.lugar = lugar;
        this.tipoEventoId = tipoEventoId;
        this.responsableId = responsableId;
    }
    static create(props) {
        const { nombre, fecha, hora, lugar, tipoEventoId, responsableId } = props;
        if (!nombre)
            return ['nombre property is required', undefined];
        if (!fecha)
            return ['fecha property is required', undefined];
        if (!hora)
            return ['hora property is required', undefined];
        if (!lugar)
            return ['lugar property is required', undefined];
        if (!tipoEventoId)
            return ['tipoEventoId property is required', undefined];
        if (!responsableId)
            return ['responsableId property is required', undefined];
        // Formato "YYYY-MM-DD HH:MI:SS"
        const fechaFormateada = `${fecha} ${hora}:00`;
        return [undefined, new CreateEventoDto(nombre, new Date(fechaFormateada), hora, lugar, tipoEventoId, responsableId)];
    }
}
exports.CreateEventoDto = CreateEventoDto;
