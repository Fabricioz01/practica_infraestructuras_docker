import { Router } from 'express';
import { EventoController } from './controller'


export class EventoRoutes {


  static get routes(): Router {

    const router = Router();

    const eventoController= new EventoController();

    router.get('/', eventoController.getEvento );
    router.get('/:id', eventoController.getEventoById );
    
    router.post('/', eventoController.createEvento );
    router.put('/:id', eventoController.updateevento );
    router.delete('/:id', eventoController.deleteevento);


    return router;
  }


}

