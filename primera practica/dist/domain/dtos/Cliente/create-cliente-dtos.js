"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClienteDTO = void 0;
class CreateClienteDTO {
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
        const { nombre, apellido, correo, telefono, direccion, ciudad, codigoPostal, pais, } = props;
        if (!nombre)
            return ['nombre property is required', undefined];
        if (!apellido)
            return ['apellido property is required', undefined];
        if (!correo)
            return ['correo property is required', undefined];
        if (!telefono)
            return ['telefono property is required', undefined];
        if (!direccion)
            return ['direccion property is required', undefined];
        if (!ciudad)
            return ['ciudad property is required', undefined];
        if (!codigoPostal)
            return ['codigoPostal property is required', undefined];
        if (!pais)
            return ['pais property is required', undefined];
        return [
            undefined,
            new CreateClienteDTO(nombre, apellido, correo, telefono, direccion, ciudad, codigoPostal, pais),
        ];
    }
}
exports.CreateClienteDTO = CreateClienteDTO;
