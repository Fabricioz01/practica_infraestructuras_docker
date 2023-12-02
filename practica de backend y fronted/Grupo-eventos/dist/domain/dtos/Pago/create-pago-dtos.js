"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePagoDTO = void 0;
class CreatePagoDTO {
    constructor(monto, fechaPago, metodoPagoId, eventoId, clienteId) {
        this.monto = monto;
        this.fechaPago = fechaPago;
        this.metodoPagoId = metodoPagoId;
        this.eventoId = eventoId;
        this.clienteId = clienteId;
    }
    static create(props) {
        const { monto, fechaPago, metodoPagoId, eventoId, clienteId } = props;
        if (!monto)
            return ['monto property is required', undefined];
        if (!fechaPago)
            return ['fechaPago property is required', undefined];
        if (!metodoPagoId)
            return ['metodoPagoId property is required', undefined];
        if (!eventoId)
            return ['eventoId property is required', undefined];
        if (!clienteId)
            return ['clienteId property is required', undefined];
        // Formato "YYYY-MM-DD HH:MI:SS"
        const fechaFormateada = `${fechaPago} `;
        return [undefined, new CreatePagoDTO(monto, new Date(fechaFormateada), metodoPagoId, eventoId, clienteId)];
    }
}
exports.CreatePagoDTO = CreatePagoDTO;
