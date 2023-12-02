"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCalificacionProveedorDto = void 0;
class CreateCalificacionProveedorDto {
    constructor(puntuacion, comentarios, proveedorId, fechaCalificacion) {
        this.puntuacion = puntuacion;
        this.comentarios = comentarios;
        this.proveedorId = proveedorId;
        this.fechaCalificacion = fechaCalificacion;
    }
    static create(props) {
        const { puntuacion, comentarios, proveedorId, fechaCalificacion, direccion, ciudad, codigoPostal, pais } = props;
        if (!puntuacion)
            return ['puntuacion  property is required', undefined];
        if (!comentarios)
            return ['comentarios  property is required', undefined];
        if (!proveedorId)
            return ['proveedorId  property is required', undefined];
        if (!fechaCalificacion)
            return ['fechaCalificacion  property is required', undefined];
        const fechaFormateada = `${fechaCalificacion}:00`;
        return [undefined, new CreateCalificacionProveedorDto(puntuacion, comentarios, proveedorId, new Date(fechaFormateada))];
    }
}
exports.CreateCalificacionProveedorDto = CreateCalificacionProveedorDto;
