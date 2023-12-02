"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProveedorDTO = void 0;
class UpdateProveedorDTO {
    constructor(id, nombre, contacto, telefono, contratoId, clienteId) {
        this.id = id;
        this.nombre = nombre;
        this.contacto = contacto;
        this.telefono = telefono;
        this.contratoId = contratoId;
        this.clienteId = clienteId;
    }
    get values() {
        const returnObj = {};
        if (this.id)
            returnObj.id = this.id;
        if (this.nombre)
            returnObj.nombre = this.nombre;
        if (this.contacto)
            returnObj.contacto = this.contacto;
        if (this.telefono)
            returnObj.telefono = this.telefono;
        if (this.contratoId)
            returnObj.contratoId = this.contratoId;
        if (this.clienteId)
            returnObj.clienteId = this.clienteId;
        return returnObj;
    }
    static create(props) {
        const { id, nombre, contacto, telefono, contratoId, clienteId } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id && !nombre && !contacto && !telefono && !contratoId && !clienteId) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateProveedorDTO(id, nombre, contacto, telefono, contratoId, clienteId)];
    }
}
exports.UpdateProveedorDTO = UpdateProveedorDTO;
