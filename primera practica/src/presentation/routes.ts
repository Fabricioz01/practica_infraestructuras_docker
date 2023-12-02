import { Router } from 'express';

import { ClienteRoutes} from './Cliente/routes'
import {ContratoRoutes} from './Contrato/routes'
import {ProveedorRoutes} from './Proveedor/routes'

export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    router.use('/api/Cliente', ClienteRoutes.routes)
    router.use('/api/Contato',ContratoRoutes.routes)
    router.use('/api/Proveedor',ProveedorRoutes.routes)
    return router;
  }


}

