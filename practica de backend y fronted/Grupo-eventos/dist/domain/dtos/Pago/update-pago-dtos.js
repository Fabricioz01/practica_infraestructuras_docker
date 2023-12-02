"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePagoDto = void 0;
class UpdatePagoDto {
    constructor(id, monto, fechaPago, metodoPagoId, eventoId, clienteId) {
        this.id = id;
        this.monto = monto;
        this.fechaPago = fechaPago;
        this.metodoPagoId = metodoPagoId;
        this.eventoId = eventoId;
        this.clienteId = clienteId;
    }
    get values() {
        const returnObj = {};
        if (this.id)
            returnObj.id = this.id;
        if (this.monto)
            returnObj.monto = this.monto;
        if (this.fechaPago)
            returnObj.fechaPago = this.fechaPago;
        if (this.metodoPagoId)
            returnObj.metodoPagoId = this.metodoPagoId;
        if (this.eventoId)
            returnObj.eventoId = this.eventoId;
        if (this.clienteId)
            returnObj.clienteId = this.clienteId;
        return returnObj;
    }
    static create(props) {
        const { id, monto, fechaPago, metodoPagoId, eventoId, clienteId } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id && !monto && !fechaPago && !metodoPagoId && !eventoId && !clienteId) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdatePagoDto(id, monto, fechaPago, metodoPagoId, eventoId, clienteId)];
    }
}
exports.UpdatePagoDto = UpdatePagoDto;
