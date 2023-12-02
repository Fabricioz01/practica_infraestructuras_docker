import { Router } from 'express';

import { AsistenteRoutes  } from './Asistente/routes';
import {  CalificacionRoutes  } from './Calificacion/routes';
import {  CalificacionProveedorRoutes  } from './CalificacionProveedor/routes';
import {  ClienteRoutes  } from './Cliente/routes';
import {  ContratoRoutes  } from './Contrato/routes';
import {  EventoRoutes  } from './Evento/routes';
import {  MetodoPagoRoutes  } from './MetodoPago/routes';
import {  PagoRoutes} from './Pago/routes';
import {  PersonaRoutes  } from './Persona/routes';
import {  ProveedorRoutes  } from './Proveedor/routes';
import {  ReservasRoutes  } from './Reservas/routes';
import {  ServicioRoutes  } from './Servicios/routes';
import {  TipoeventoRoutes  } from './TipoEvento/routes';
import {  TpservicioRoutes  } from './TipodeServicio/routes';

export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/asistente', AsistenteRoutes.routes );
    router.use('/api/calificacion', CalificacionRoutes.routes );
    router.use('/api/calificacionpro', CalificacionProveedorRoutes.routes );
    router.use('/api/cliente', ClienteRoutes.routes );
    router.use('/api/contrato', ContratoRoutes.routes );
    router.use('/api/evento', EventoRoutes.routes );
    router.use('/api/metodopago', MetodoPagoRoutes.routes );
    router.use('/api/pagos', PagoRoutes.routes);
    router.use('/api/persona', PersonaRoutes.routes );
    router.use('/api/proveedor', ProveedorRoutes.routes );
    router.use('/api/reservas', ReservasRoutes.routes );
    router.use('/api/servicio', ServicioRoutes.routes );
    router.use('/api/tipoevento', TipoeventoRoutes.routes );
    router.use('/api/tpservicio', TpservicioRoutes.routes );

    
    return router;
  }


}

