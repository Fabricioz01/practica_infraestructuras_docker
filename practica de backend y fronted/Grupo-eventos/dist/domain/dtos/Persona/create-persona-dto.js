"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePersonaDto = void 0;
class CreatePersonaDto {
    constructor(nombre, apellido, correo, telefono, direccion, ciudad, codigoPostal, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.telefono = telefono;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.codigoPostal = codigoPostal;
        this.pais = pais;
    }
    static create(props) {
        const { nombre, apellido, correo, telefono, direccion, ciudad, codigoPostal, pais } = props;
        if (!nombre)
            return ['nombre  property is required', undefined];
        if (!apellido)
            return ['apellido  property is required', undefined];
        if (!correo)
            return ['correo  property is required', undefined];
        if (!telefono)
            return ['telefono  property is required', undefined];
        if (!direccion)
            return ['direccion  property is required', undefined];
        if (!ciudad)
            return ['ciudad  property is required', undefined];
        if (!codigoPostal)
            return ['codigoPostal  property is required', undefined];
        if (!pais)
            return ['pais  property is required', undefined];
        return [undefined, new CreatePersonaDto(nombre, apellido, correo, telefono, direccion, ciudad, codigoPostal, pais)];
    }
}
exports.CreatePersonaDto = CreatePersonaDto;
