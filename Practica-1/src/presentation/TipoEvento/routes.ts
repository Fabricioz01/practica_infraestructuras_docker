import { Router } from 'express';
import { TipoeventoController } from './controller'


export class TipoeventoRoutes {


  static get routes(): Router {

    const router = Router();

    const tipoeventoController= new TipoeventoController();

    router.get('/', tipoeventoController.getTipoEvento );
    router.get('/:id', tipoeventoController.getTipoEventoById );
    
    router.post('/', tipoeventoController.createTipoEvento );
    router.put('/:id', tipoeventoController.updatetipoevento );
    router.delete('/:id', tipoeventoController.deletetipoevento);


    return router;
  }


}

