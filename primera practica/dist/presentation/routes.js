"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./Cliente/routes");
const routes_2 = require("./Contrato/routes");
const routes_3 = require("./Proveedor/routes");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/api/Cliente', routes_1.ClienteRoutes.routes);
        router.use('/api/Contato', routes_2.ContratoRoutes.routes);
        router.use('/api/Proveedor', routes_3.ProveedorRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
