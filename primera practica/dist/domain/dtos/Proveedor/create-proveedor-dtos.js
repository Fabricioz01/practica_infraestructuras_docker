"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProveedorDTO = void 0;
class CreateProveedorDTO {
    constructor(nombre, contacto, telefono, contratoId, clienteId) {
        this.nombre = nombre;
        this.contacto = contacto;
        this.telefono = telefono;
        this.contratoId = contratoId;
        this.clienteId = clienteId;
    }
    static create(props) {
        const { nombre, contacto, telefono, contratoId, clienteId } = props;
        if (!nombre)
            return ['nombre property is required', undefined];
        if (!contacto)
            return ['contacto property is required', undefined];
        if (!telefono)
            return ['telefono property is required', undefined];
        return [undefined, new CreateProveedorDTO(nombre, contacto, telefono, contratoId, clienteId)];
    }
}
exports.CreateProveedorDTO = CreateProveedorDTO;
