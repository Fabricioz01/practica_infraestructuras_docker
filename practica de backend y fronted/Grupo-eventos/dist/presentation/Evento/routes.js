"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventoRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class EventoRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const eventoController = new controller_1.EventoController();
        router.get('/', eventoController.getEvento);
        router.get('/:id', eventoController.getEventoById);
        router.post('/', eventoController.createEvento);
        router.put('/:id', eventoController.updateevento);
        router.delete('/:id', eventoController.deleteevento);
        return router;
    }
}
exports.EventoRoutes = EventoRoutes;
