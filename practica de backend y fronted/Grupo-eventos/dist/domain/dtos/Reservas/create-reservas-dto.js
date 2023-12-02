"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReservaDto = void 0;
class CreateReservaDto {
    constructor(fechaReserva, horaReserva, eventoId, duracionReserva) {
        this.fechaReserva = fechaReserva;
        this.horaReserva = horaReserva;
        this.eventoId = eventoId;
        this.duracionReserva = duracionReserva;
    }
    static create(props) {
        const { fechaReserva, horaReserva, eventoId, duracionReserva } = props;
        if (!fechaReserva)
            return ['fechaReserva property is required', undefined];
        if (!horaReserva)
            return ['horaReserva property is required', undefined];
        if (!eventoId)
            return ['eventoId property is required', undefined];
        if (!duracionReserva)
            return ['duracionReserva property is required', undefined];
        const fechaFormateada = `${fechaReserva}:00`;
        return [undefined, new CreateReservaDto(new Date(fechaFormateada), horaReserva, eventoId, duracionReserva)];
    }
}
exports.CreateReservaDto = CreateReservaDto;
