"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalificacionRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class CalificacionRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const calificacionController = new controller_1.CalificacionController();
        router.get('/', calificacionController.getCalificacion);
        router.get('/:id', calificacionController.getCalificacionById);
        router.post('/', calificacionController.createCalificacion);
        router.put('/:id', calificacionController.updateCalificacion);
        router.delete('/:id', calificacionController.deleteCalificacion);
        return router;
    }
}
exports.CalificacionRoutes = CalificacionRoutes;
