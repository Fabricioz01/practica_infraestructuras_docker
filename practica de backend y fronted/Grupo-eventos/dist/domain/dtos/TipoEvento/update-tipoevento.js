"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTipoEventoDto = void 0;
class UpdateTipoEventoDto {
    constructor(id, nombre, descripcion, precioBase, aforoMaximo, duracion) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precioBase = precioBase;
        this.aforoMaximo = aforoMaximo;
        this.duracion = duracion;
    }
    get values() {
        const returnObj = {};
        if (this.id)
            returnObj.id = this.id;
        if (this.nombre)
            returnObj.nombre = this.nombre;
        if (this.descripcion)
            returnObj.descripcion = this.descripcion;
        if (this.precioBase)
            returnObj.precioBase = this.precioBase;
        if (this.aforoMaximo)
            returnObj.aforoMaximo = this.aforoMaximo;
        if (this.duracion)
            returnObj.duracion = this.duracion;
        return returnObj;
    }
    static create(props) {
        const { id, nombre, descripcion, precioBase, aforoMaximo, duracion } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id && !nombre && !descripcion && !precioBase && !aforoMaximo && !duracion) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateTipoEventoDto(id, nombre, descripcion, precioBase, aforoMaximo, duracion)];
    }
}
exports.UpdateTipoEventoDto = UpdateTipoEventoDto;
