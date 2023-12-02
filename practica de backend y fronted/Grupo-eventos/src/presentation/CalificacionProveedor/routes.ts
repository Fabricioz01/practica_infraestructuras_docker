import { Router } from 'express';
import { CalificacionProveedorController } from './controller'


export class CalificacionProveedorRoutes {


  static get routes(): Router {

    const router = Router();

    const calificacionProveedorController= new CalificacionProveedorController();

    router.get('/', calificacionProveedorController.getCalificacionProveedor );
    router.get('/:id', calificacionProveedorController.getCalificacionProveedorById );
    
    router.post('/', calificacionProveedorController.createCalificacionProveedor );
    router.put('/:id', calificacionProveedorController.updateCalificacionProveedor );
    router.delete('/:id', calificacionProveedorController.deleteCalificacionProveedor);


    return router;
  }


}

