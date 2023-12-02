"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAsistenteDTO = void 0;
class UpdateAsistenteDTO {
    constructor(id, nombre, apellido, correo, telefono, clienteId, metodoPagoId) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.telefono = telefono;
        this.clienteId = clienteId;
        this.metodoPagoId = metodoPagoId;
    }
    get values() {
        const returnObj = {};
        if (this.id)
            returnObj.id = this.id;
        if (this.nombre)
            returnObj.nombre = this.nombre;
        if (this.apellido)
            returnObj.apellido = this.apellido;
        if (this.correo)
            returnObj.correo = this.correo;
        if (this.telefono)
            returnObj.telefono = this.telefono;
        if (this.clienteId)
            returnObj.clienteId = this.clienteId;
        if (this.metodoPagoId)
            returnObj.ciudad = this.metodoPagoId;
        return returnObj;
    }
    static create(props) {
        const { id, nombre, apellido, correo, telefono, clienteId, metodoPagoId, } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id && !nombre && !apellido && !correo && !telefono && !clienteId && !metodoPagoId) {
            return ['At least one property must be provided'];
        }
        return [
            undefined,
            new UpdateAsistenteDTO(id, nombre, apellido, correo, telefono, clienteId, metodoPagoId),
        ];
    }
}
exports.UpdateAsistenteDTO = UpdateAsistenteDTO;
