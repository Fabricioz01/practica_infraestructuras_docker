"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCalificacionDto = void 0;
class CreateCalificacionDto {
    constructor(puntuacion, comentarios, eventoId, fechaCalificacion) {
        this.puntuacion = puntuacion;
        this.comentarios = comentarios;
        this.eventoId = eventoId;
        this.fechaCalificacion = fechaCalificacion;
    }
    static create(props) {
        const { puntuacion, comentarios, eventoId, fechaCalificacion, direccion, ciudad, codigoPostal, pais } = props;
        if (!puntuacion)
            return ['puntuacion  property is required', undefined];
        if (!comentarios)
            return ['comentarios  property is required', undefined];
        if (!eventoId)
            return ['eventoId  property is required', undefined];
        if (!fechaCalificacion)
            return ['fechaCalificacion  property is required', undefined];
        const fechaFormateada = `${fechaCalificacion}:00`;
        return [undefined, new CreateCalificacionDto(puntuacion, comentarios, eventoId, new Date(fechaFormateada))];
    }
}
exports.CreateCalificacionDto = CreateCalificacionDto;
