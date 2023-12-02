"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsistenteRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class AsistenteRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const asistenteController = new controller_1.AsistenteController();
        router.get('/', asistenteController.getAsistente);
        router.get('/:id', asistenteController.getAsistenteById);
        router.post('/', asistenteController.createAsistente);
        router.put('/:id', asistenteController.updateAsistente);
        router.delete('/:id', asistenteController.deleteAsistente);
        return router;
    }
}
exports.AsistenteRoutes = AsistenteRoutes;
