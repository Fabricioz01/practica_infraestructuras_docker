import { Router } from 'express';
import { PersonaController } from './controller'


export class PersonaRoutes {


  static get routes(): Router {

    const router = Router();

    const personaController= new PersonaController();

    router.get('/', personaController.getPersona );
    router.get('/:id', personaController.getPersonaById );
    
    router.post('/', personaController.createPersona );
    router.put('/:id', personaController.updatepersona );
    router.delete('/:id', personaController.deletepersona);


    return router;
  }


}

