"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagoRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class PagoRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const pagoController = new controller_1.PagoController();
        router.get('/', pagoController.getPago);
        router.get('/:id', pagoController.getPagoById);
        router.post('/', pagoController.createPagoDTO);
        router.put('/:id', pagoController.updatepagos);
        router.delete('/:id', pagoController.deletepago);
        return router;
    }
}
exports.PagoRoutes = PagoRoutes;
