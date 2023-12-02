"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTipoServicioDto = void 0;
class UpdateTipoServicioDto {
    constructor(id, nombre, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
    get values() {
        const returnObj = {};
        if (this.id)
            returnObj.id = this.id;
        if (this.nombre)
            returnObj.nombre = this.nombre;
        if (this.descripcion)
            returnObj.descripcion = this.descripcion;
        return returnObj;
    }
    static create(props) {
        const { id, nombre, descripcion } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id && !nombre && !descripcion) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateTipoServicioDto(id, nombre, descripcion)];
    }
}
exports.UpdateTipoServicioDto = UpdateTipoServicioDto;
