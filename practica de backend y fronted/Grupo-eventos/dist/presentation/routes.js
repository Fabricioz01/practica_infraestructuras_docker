"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./Asistente/routes");
const routes_2 = require("./Calificacion/routes");
const routes_3 = require("./CalificacionProveedor/routes");
const routes_4 = require("./Cliente/routes");
const routes_5 = require("./Contrato/routes");
const routes_6 = require("./Evento/routes");
const routes_7 = require("./MetodoPago/routes");
const routes_8 = require("./Pago/routes");
const routes_9 = require("./Persona/routes");
const routes_10 = require("./Proveedor/routes");
const routes_11 = require("./Reservas/routes");
const routes_12 = require("./Servicios/routes");
const routes_13 = require("./TipoEvento/routes");
const routes_14 = require("./TipodeServicio/routes");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/api/asistente', routes_1.AsistenteRoutes.routes);
        router.use('/api/calificacion', routes_2.CalificacionRoutes.routes);
        router.use('/api/calificacionpro', routes_3.CalificacionProveedorRoutes.routes);
        router.use('/api/cliente', routes_4.ClienteRoutes.routes);
        router.use('/api/contrato', routes_5.ContratoRoutes.routes);
        router.use('/api/evento', routes_6.EventoRoutes.routes);
        router.use('/api/metodopago', routes_7.MetodoPagoRoutes.routes);
        router.use('/api/pagos', routes_8.PagoRoutes.routes);
        router.use('/api/persona', routes_9.PersonaRoutes.routes);
        router.use('/api/proveedor', routes_10.ProveedorRoutes.routes);
        router.use('/api/reservas', routes_11.ReservasRoutes.routes);
        router.use('/api/servicio', routes_12.ServicioRoutes.routes);
        router.use('/api/tipoevento', routes_13.TipoeventoRoutes.routes);
        router.use('/api/tpservicio', routes_14.TpservicioRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
