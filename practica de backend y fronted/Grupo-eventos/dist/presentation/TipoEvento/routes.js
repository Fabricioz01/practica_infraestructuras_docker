"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoeventoRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class TipoeventoRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const tipoeventoController = new controller_1.TipoeventoController();
        router.get('/', tipoeventoController.getTipoEvento);
        router.get('/:id', tipoeventoController.getTipoEventoById);
        router.post('/', tipoeventoController.createTipoEvento);
        router.put('/:id', tipoeventoController.updatetipoevento);
        router.delete('/:id', tipoeventoController.deletetipoevento);
        return router;
    }
}
exports.TipoeventoRoutes = TipoeventoRoutes;
