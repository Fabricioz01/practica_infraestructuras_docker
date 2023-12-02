"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCalificacionProveedorDto = void 0;
class UpdateCalificacionProveedorDto {
    constructor(id, puntuacion, comentarios, proveedorId, fechaCalificacion) {
        this.id = id;
        this.puntuacion = puntuacion;
        this.comentarios = comentarios;
        this.proveedorId = proveedorId;
        this.fechaCalificacion = fechaCalificacion;
    }
    get values() {
        const returnObj = {};
        if (this.id)
            returnObj.id = this.id;
        if (this.puntuacion)
            returnObj.puntuacion = this.puntuacion;
        if (this.comentarios)
            returnObj.comentarios = this.comentarios;
        if (this.proveedorId)
            returnObj.proveedorId = this.proveedorId;
        if (this.fechaCalificacion)
            returnObj.fechaCalificacion = this.fechaCalificacion;
        return returnObj;
    }
    static create(props) {
        const { id, puntuacion, comentarios, proveedorId, fechaCalificacion, } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id && !puntuacion && !comentarios && !proveedorId && !fechaCalificacion) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateCalificacionProveedorDto(id, puntuacion, comentarios, proveedorId, fechaCalificacion)];
    }
}
exports.UpdateCalificacionProveedorDto = UpdateCalificacionProveedorDto;
