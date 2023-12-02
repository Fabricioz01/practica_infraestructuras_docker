"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./Cliente/routes");
const routes_2 = require("./Proveedor/routes");
const routes_3 = require ("./Contrato/routes")
class AppRoutes{
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/api/cliente', routes_1.clienteRoutes.routes);
        router.use('/api/proveedor', routes_2.proveedorRoutes.routes);
        router.use('./api/contrato', router_3.contratoRoutes.routes)
        return router;
    }
}
exports.AppRoutes = AppRoutes;
