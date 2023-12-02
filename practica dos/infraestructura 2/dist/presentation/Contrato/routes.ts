import { Router } from 'express';
import { ContratoController } from './controller';

export class ContratoRoutes {
  static get routes(): Router {
    const router = Router();
    const contratoController = new ContratoController();

    router.get('/', contratoController.getContrato);
    router.get('/:id', contratoController.getContratoById);
    router.post('/', contratoController.createContrato);
    router.put('/:id', contratoController.updateContrato);
    router.delete('/:id', contratoController.deleteContrato);

    return router;
  }
}
