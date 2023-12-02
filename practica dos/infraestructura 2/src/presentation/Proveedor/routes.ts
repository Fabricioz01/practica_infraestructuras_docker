import { Router } from 'express';
import { ProveedorController } from './controller';

export class ProveedorRoutes {
  static get routes(): Router {
    const router = Router();
    const proveedorController = new ProveedorController();

    router.get('/', proveedorController.getProveedor);
    router.get('/:id', proveedorController.getProveedorById);
    router.post('/', proveedorController.createProveedor);
    router.put('/:id', proveedorController.updateProveedor);
    router.delete('/:id', proveedorController.deleteProveedor);

    return router;
  }
}
