"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class PersonaRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const personaController = new controller_1.PersonaController();
        router.get('/', personaController.getPersona);
        router.get('/:id', personaController.getPersonaById);
        router.post('/', personaController.createPersona);
        router.put('/:id', personaController.updatepersona);
        router.delete('/:id', personaController.deletepersona);
        return router;
    }
}
exports.PersonaRoutes = PersonaRoutes;
