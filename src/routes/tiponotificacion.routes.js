import { Router } from 'express'
import { getTiposNotificacion, newTipoNotificacion, updateTipoNotificacion } from '../controllers/tiponotificacion.controller.js'

const router = Router();

router.get('/tiponotificacion/getTiposNotificacion', getTiposNotificacion);

router.put('/tiponotificacion/newTipoNotificacion', newTipoNotificacion);

router.put('/tiponotificacion/updateTipoNotificacion/:id', updateTipoNotificacion);

export default router;