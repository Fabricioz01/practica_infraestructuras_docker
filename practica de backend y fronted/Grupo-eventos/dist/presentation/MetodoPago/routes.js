"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetodoPagoRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class MetodoPagoRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const metodopagoController = new controller_1.MetodoPagoController();
        router.get('/', metodopagoController.getMetodoPago);
        router.get('/:id', metodopagoController.getMetodoPagoById);
        router.post('/', metodopagoController.createMetodoPago);
        router.put('/:id', metodopagoController.updateMetodoPago);
        router.delete('/:id', metodopagoController.deleteMetodoPago);
        return router;
    }
}
exports.MetodoPagoRoutes = MetodoPagoRoutes;
