"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProveedorRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class ProveedorRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const proveedorController = new controller_1.ProveedorController();
        router.get('/', proveedorController.getProveedor);
        router.get('/:id', proveedorController.getProveedorById);
        router.post('/', proveedorController.createProveedor);
        router.put('/:id', proveedorController.updateProveedor);
        router.delete('/:id', proveedorController.deleteProveedor);
        return router;
    }
}
exports.ProveedorRoutes = ProveedorRoutes;
