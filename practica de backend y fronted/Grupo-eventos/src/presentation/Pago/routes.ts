import { Router } from 'express';
import { PagoController } from './controller'


export class PagoRoutes {


  static get routes(): Router {

    const router = Router();

    const pagoController = new PagoController();

    router.get('/', pagoController.getPago );
    router.get('/:id', pagoController.getPagoById );
    
    router.post('/', pagoController.createPagoDTO );
    router.put('/:id', pagoController.updatepagos );
    router.delete('/:id', pagoController.deletepago);


    return router;
  }


}

