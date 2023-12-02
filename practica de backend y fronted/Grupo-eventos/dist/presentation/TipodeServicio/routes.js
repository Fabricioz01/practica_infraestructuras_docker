"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TpservicioRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class TpservicioRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const tpservicioController = new controller_1.TpservicioController();
        router.get('/', tpservicioController.getTpservicio);
        router.get('/:id', tpservicioController.getTpservicioById);
        router.post('/', tpservicioController.createTpservicio);
        router.put('/:id', tpservicioController.updateTpservicio);
        router.delete('/:id', tpservicioController.deleteTpservicio);
        return router;
    }
}
exports.TpservicioRoutes = TpservicioRoutes;
