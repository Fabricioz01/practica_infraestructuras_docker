"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateServicioDto = void 0;
class CreateServicioDto {
    constructor(nombre, costo, reservaId, tipoServicioId) {
        this.nombre = nombre;
        this.costo = costo;
        this.reservaId = reservaId;
        this.tipoServicioId = tipoServicioId;
    }
    static create(props) {
        const { nombre, costo, reserva, reservaId, tipoServicioId } = props;
        if (!nombre)
            return ['nombre property is required', undefined];
        if (!costo)
            return ['costo property is required', undefined];
        if (!reservaId)
            return ['reservaId property is required', undefined];
        if (!tipoServicioId)
            return ['tipoServicioId property is required', undefined];
        return [undefined, new CreateServicioDto(nombre, costo, reservaId, tipoServicioId),];
    }
}
exports.CreateServicioDto = CreateServicioDto;
