"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReservaDto = void 0;
class UpdateReservaDto {
    constructor(id, fechaReserva, horaReserva, eventoId, duracionReserva) {
        this.id = id;
        this.fechaReserva = fechaReserva;
        this.horaReserva = horaReserva;
        this.eventoId = eventoId;
        this.duracionReserva = duracionReserva;
    }
    get values() {
        const returnObj = {};
        if (this.id)
            returnObj.id = this.id;
        if (this.fechaReserva)
            returnObj.fechaReserva = this.fechaReserva;
        if (this.horaReserva)
            returnObj.horaReserva = this.horaReserva;
        if (this.eventoId)
            returnObj.eventoId = this.eventoId;
        if (this.duracionReserva)
            returnObj.duracionReserva = this.duracionReserva;
        return returnObj;
    }
    static create(props) {
        const { id, fechaReserva, horaReserva, eventoId, duracionReserva } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id && !fechaReserva && !horaReserva && !eventoId && !duracionReserva) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateReservaDto(id, fechaReserva, horaReserva, eventoId, duracionReserva)];
    }
}
exports.UpdateReservaDto = UpdateReservaDto;
