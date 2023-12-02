import { Router } from 'express';
import { ClienteController } from './controller';

export class ClienteRoutes {
  static get routes(): Router {
    const router = Router();
    const clienteController = new ClienteController();

    router.get('/', clienteController.getCliente);
    router.get('/:id', clienteController.getClienteById);
    router.post('/', clienteController.createCliente);
    router.put('/:id', clienteController.updateCliente);
    router.delete('/:id', clienteController.deleteCliente);

    return router;
  }
}
