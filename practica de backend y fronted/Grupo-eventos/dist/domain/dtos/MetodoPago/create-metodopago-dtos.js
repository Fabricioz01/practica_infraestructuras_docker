"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMetodoPagoDTO = void 0;
class CreateMetodoPagoDTO {
    constructor(nombre) {
        this.nombre = nombre;
    }
    static create(props) {
        const { nombre } = props;
        if (!nombre)
            return ['nombre property is required', undefined];
        return [undefined, new CreateMetodoPagoDTO(nombre)];
    }
}
exports.CreateMetodoPagoDTO = CreateMetodoPagoDTO;
