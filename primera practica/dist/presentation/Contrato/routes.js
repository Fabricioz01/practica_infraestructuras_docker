"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContratoRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class ContratoRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const contratoController = new controller_1.ContratoController();
        router.get('/', contratoController.getContrato);
        router.get('/:id', contratoController.getContratoById);
        router.post('/', contratoController.createContrato);
        router.put('/:id', contratoController.updateContrato);
        router.delete('/:id', contratoController.deleteContrato);
        return router;
    }
}
exports.ContratoRoutes = ContratoRoutes;
