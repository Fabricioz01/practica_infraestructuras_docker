"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMetodoPagoDto = void 0;
class UpdateMetodoPagoDto {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    get values() {
        const returnObj = {};
        if (this.id)
            returnObj.id = this.id;
        if (this.nombre)
            returnObj.nombre = this.nombre;
        return returnObj;
    }
    static create(props) {
        const { id, nombre } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id && !nombre) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateMetodoPagoDto(id, nombre)];
    }
}
exports.UpdateMetodoPagoDto = UpdateMetodoPagoDto;
