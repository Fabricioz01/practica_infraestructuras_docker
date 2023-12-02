import { Router } from 'express';
import { ReservasController } from './controller';

export class ReservasRoutes {
  static get routes(): Router {
    const router = Router();
    const reservasController = new ReservasController();

    router.get('/', reservasController.getReservas);
    router.get('/:id', reservasController.getReservasById);
    router.post('/', reservasController.createReservas);
    router.put('/:id', reservasController.updateReservas);
    router.delete('/:id', reservasController.deleteReservas);

    return router;
  }
}