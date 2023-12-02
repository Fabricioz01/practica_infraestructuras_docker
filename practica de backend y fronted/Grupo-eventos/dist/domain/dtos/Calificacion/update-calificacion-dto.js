"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCalificacionDto = void 0;
class UpdateCalificacionDto {
    constructor(id, puntuacion, comentarios, eventoId, fechaCalificacion) {
        this.id = id;
        this.puntuacion = puntuacion;
        this.comentarios = comentarios;
        this.eventoId = eventoId;
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
        if (this.eventoId)
            returnObj.eventoId = this.eventoId;
        if (this.fechaCalificacion)
            returnObj.fechaCalificacion = this.fechaCalificacion;
        return returnObj;
    }
    static create(props) {
        const { id, puntuacion, comentarios, eventoId, fechaCalificacion, } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id && !puntuacion && !comentarios && !eventoId && !fechaCalificacion) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateCalificacionDto(id, puntuacion, comentarios, eventoId, fechaCalificacion)];
    }
}
exports.UpdateCalificacionDto = UpdateCalificacionDto;
