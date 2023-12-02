"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalificacionProveedorRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class CalificacionProveedorRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const calificacionProveedorController = new controller_1.CalificacionProveedorController();
        router.get('/', calificacionProveedorController.getCalificacionProveedor);
        router.get('/:id', calificacionProveedorController.getCalificacionProveedorById);
        router.post('/', calificacionProveedorController.createCalificacionProveedor);
        router.put('/:id', calificacionProveedorController.updateCalificacionProveedor);
        router.delete('/:id', calificacionProveedorController.deleteCalificacionProveedor);
        return router;
    }
}
exports.CalificacionProveedorRoutes = CalificacionProveedorRoutes;
