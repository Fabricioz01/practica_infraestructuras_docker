"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePersonaDto = void 0;
class UpdatePersonaDto {
    constructor(id, nombre, apellido, correo, telefono, direccion, ciudad, codigoPostal, pais) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.telefono = telefono;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.codigoPostal = codigoPostal;
        this.pais = pais;
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
        if (this.direccion)
            returnObj.direccion = this.direccion;
        if (this.ciudad)
            returnObj.ciudad = this.ciudad;
        if (this.codigoPostal)
            returnObj.codigoPostal = this.codigoPostal;
        if (this.pais)
            returnObj.pais = this.pais;
        return returnObj;
    }
    static create(props) {
        const { id, nombre, apellido, correo, telefono, direccion, ciudad, codigoPostal, pais } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id && !nombre && !apellido && !correo && !telefono && !direccion && !ciudad && !codigoPostal && !pais) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdatePersonaDto(id, nombre, apellido, correo, telefono, direccion, ciudad, codigoPostal, pais)];
    }
}
exports.UpdatePersonaDto = UpdatePersonaDto;
