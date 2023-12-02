"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEventoDto = void 0;
class UpdateEventoDto {
    constructor(id, nombre, fecha, hora, lugar, tipoEventoId, responsableId) {
        this.id = id;
        this.nombre = nombre;
        this.fecha = fecha;
        this.hora = hora;
        this.lugar = lugar;
        this.tipoEventoId = tipoEventoId;
        this.responsableId = responsableId;
    }
    get values() {
        const returnObj = {};
        if (this.id)
            returnObj.id = this.id;
        if (this.nombre)
            returnObj.nombre = this.nombre;
        if (this.hora)
            returnObj.hora = this.hora;
        if (this.lugar)
            returnObj.lugar = this.lugar;
        if (this.tipoEventoId)
            returnObj.tipoEventoId = this.tipoEventoId;
        if (this.responsableId)
            returnObj.responsableId = this.responsableId;
        return returnObj;
    }
    static create(props) {
        const { id, nombre, fecha, hora, lugar, tipoEventoId, responsableId, idDatos_personal_prof } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id && !nombre && !fecha && !hora && !lugar && !tipoEventoId && !responsableId && !idDatos_personal_prof) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateEventoDto(id, nombre, fecha, hora, lugar, tipoEventoId, responsableId)];
    }
}
exports.UpdateEventoDto = UpdateEventoDto;
