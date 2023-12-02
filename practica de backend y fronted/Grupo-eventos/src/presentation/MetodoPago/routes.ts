import { Router } from 'express';
import { MetodoPagoController } from './controller';

export class MetodoPagoRoutes {
  static get routes(): Router {
    const router = Router();
    const metodopagoController = new MetodoPagoController();

    router.get('/', metodopagoController.getMetodoPago);
    router.get('/:id', metodopagoController.getMetodoPagoById);
    router.post('/', metodopagoController.createMetodoPago);
    router.put('/:id', metodopagoController.updateMetodoPago);
    router.delete('/:id', metodopagoController.deleteMetodoPago);
    
    return router;
  }
}