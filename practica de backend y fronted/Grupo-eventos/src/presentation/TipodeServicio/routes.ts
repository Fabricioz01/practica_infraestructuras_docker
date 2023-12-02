import { Router } from 'express';
import { TpservicioController } from './controller';

export class TpservicioRoutes {
  static get routes(): Router {
    const router = Router();
    const tpservicioController = new TpservicioController();

    router.get('/', tpservicioController.getTpservicio);
    router.get('/:id', tpservicioController.getTpservicioById);
    router.post('/', tpservicioController.createTpservicio);
    router.put('/:id', tpservicioController.updateTpservicio);
    router.delete('/:id', tpservicioController.deleteTpservicio);
    
    return router;
  }
}