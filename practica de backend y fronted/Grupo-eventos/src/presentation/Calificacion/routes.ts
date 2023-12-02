import { Router } from 'express';
import { CalificacionController } from './controller'


export class CalificacionRoutes {


  static get routes(): Router {

    const router = Router();

    const calificacionController= new CalificacionController();

    router.get('/', calificacionController.getCalificacion );
    router.get('/:id', calificacionController.getCalificacionById );
    
    router.post('/', calificacionController.createCalificacion );
    router.put('/:id', calificacionController.updateCalificacion );
    router.delete('/:id', calificacionController.deleteCalificacion);


    return router;
  }


}

