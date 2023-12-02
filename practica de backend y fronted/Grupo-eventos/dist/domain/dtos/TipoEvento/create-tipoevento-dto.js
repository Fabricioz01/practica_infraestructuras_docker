"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTipoEventoDto = void 0;
class CreateTipoEventoDto {
    constructor(nombre, descripcion, precioBase, aforoMaximo, duracion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precioBase = precioBase;
        this.aforoMaximo = aforoMaximo;
        this.duracion = duracion;
    }
    static create(props) {
        const { nombre, descripcion, precioBase, aforoMaximo, duracion, } = props;
        if (!nombre)
            return ['nombre  property is required', undefined];
        if (!descripcion)
            return ['descripcion  property is required', undefined];
        if (!precioBase)
            return ['precioBase  property is required', undefined];
        if (!aforoMaximo)
            return ['aforoMaximo  property is required', undefined];
        if (!duracion)
            return ['duracion  property is required', undefined];
        return [undefined, new CreateTipoEventoDto(nombre, descripcion, precioBase, aforoMaximo, duracion)];
    }
}
exports.CreateTipoEventoDto = CreateTipoEventoDto;
