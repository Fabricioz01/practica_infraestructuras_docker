"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAsistenteDTO = void 0;
class CreateAsistenteDTO {
    constructor(nombre, correo, telefono, clienteId, metodoPagoId) {
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
        this.clienteId = clienteId;
        this.metodoPagoId = metodoPagoId;
    }
    static create(props) {
        const { nombre, correo, telefono, clienteId, metodoPagoId, } = props;
        if (!nombre)
            return ['nombre property is required', undefined];
        if (!correo)
            return ['correo property is required', undefined];
        if (!telefono)
            return ['telefono property is required', undefined];
        if (!clienteId)
            return ['clienteId property is required', undefined];
        if (!metodoPagoId)
            return ['metodoPagoId property is required', undefined];
        return [
            undefined,
            new CreateAsistenteDTO(nombre, correo, telefono, clienteId, metodoPagoId),
        ];
    }
}
exports.CreateAsistenteDTO = CreateAsistenteDTO;
