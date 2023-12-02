"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatetpservicioDto = void 0;
class CreatetpservicioDto {
    constructor(nombre, descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
    static create(props) {
        const { nombre, descripcion } = props;
        if (!nombre)
            return ['nombre property is required', undefined];
        if (!descripcion)
            return ['descripcion property is required', undefined];
        return [undefined, new CreatetpservicioDto(nombre, descripcion)];
    }
}
exports.CreatetpservicioDto = CreatetpservicioDto;
