"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservasRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class ReservasRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const reservasController = new controller_1.ReservasController();
        router.get('/', reservasController.getReservas);
        router.get('/:id', reservasController.getReservasById);
        router.post('/', reservasController.createReservas);
        router.put('/:id', reservasController.updateReservas);
        router.delete('/:id', reservasController.deleteReservas);
        return router;
    }
}
exports.ReservasRoutes = ReservasRoutes;
