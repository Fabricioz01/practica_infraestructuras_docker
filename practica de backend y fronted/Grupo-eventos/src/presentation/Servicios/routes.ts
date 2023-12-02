import { Router } from 'express';
import { ServicioController } from './controller';

export class ServicioRoutes {
  static get routes(): Router {
    const router = Router();
    const servicioController = new ServicioController();

    router.get('/', servicioController.getServicio);
    router.get('/:id', servicioController.getServicioById);
    router.post('/', servicioController.createServicio);
    router.put('/:id', servicioController.updateServicio);
    router.delete('/:id', servicioController.deleteServicio);

    return router;
  }
}