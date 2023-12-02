"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContratoDTO = void 0;
class UpdateContratoDTO {
    constructor(id, fechaInicio, fechaFinalizacion, servicioId, tipoContrato, costoTotal) {
        this.id = id;
        this.fechaInicio = fechaInicio;
        this.fechaFinalizacion = fechaFinalizacion;
        this.servicioId = servicioId;
        this.tipoContrato = tipoContrato;
        this.costoTotal = costoTotal;
    }
    get values() {
        const returnObj = {};
        if (this.id)
            returnObj.id = this.id;
        if (this.fechaInicio)
            returnObj.fechaInicio = this.fechaInicio;
        if (this.fechaFinalizacion)
            returnObj.fechaFinalizacion = this.fechaFinalizacion;
        if (this.servicioId)
            returnObj.servicioId = this.servicioId;
        if (this.tipoContrato)
            returnObj.tipoContrato = this.tipoContrato;
        if (this.costoTotal)
            returnObj.costoTotal = this.costoTotal;
        return returnObj;
    }
    static create(props) {
        const { id, fechaInicio, fechaFinalizacion, servicioId, tipoContrato, costoTotal, } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id &&
            !fechaInicio &&
            !fechaFinalizacion &&
            !servicioId &&
            !tipoContrato &&
            !costoTotal) {
            return ['At least one property must be provided'];
        }
        return [
            undefined,
            new UpdateContratoDTO(id, fechaInicio, fechaFinalizacion, servicioId, tipoContrato, costoTotal),
        ];
    }
}
exports.UpdateContratoDTO = UpdateContratoDTO;
