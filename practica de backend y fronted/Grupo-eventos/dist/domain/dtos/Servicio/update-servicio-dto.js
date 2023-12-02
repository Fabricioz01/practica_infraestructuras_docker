"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateServicioDto = void 0;
class UpdateServicioDto {
    constructor(id, nombre, costo, reservaId, tipoServicioId) {
        this.id = id;
        this.nombre = nombre;
        this.costo = costo;
        this.reservaId = reservaId;
        this.tipoServicioId = tipoServicioId;
    }
    get values() {
        const returnObj = {};
        if (this.id)
            returnObj.id = this.id;
        if (this.nombre)
            returnObj.nombre = this.nombre;
        if (this.costo)
            returnObj.costo = this.costo;
        if (this.reservaId)
            returnObj.reservaId = this.reservaId;
        if (this.tipoServicioId)
            returnObj.tipoServicioId = this.tipoServicioId;
        return returnObj;
    }
    static create(props) {
        const { id, nombre, costo, reservaId, tipoServicioId } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id && !nombre && !costo && !reservaId && !tipoServicioId) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateServicioDto(id, nombre, costo, reservaId, tipoServicioId)];
    }
}
exports.UpdateServicioDto = UpdateServicioDto;
