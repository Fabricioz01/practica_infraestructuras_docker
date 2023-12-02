import { Router } from 'express';


import { ProveedorRoutes,  } from './Proveedor/routes';

export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    router.use('/api/ciudad', ProveedorRoutes.routes );
    return router;
  }


}
