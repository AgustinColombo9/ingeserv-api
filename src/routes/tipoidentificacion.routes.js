import { Router } from 'express'
import { getTiposIdentificacion, getTiposIdentificacionIVA } from '../controllers/tipoidentificacion.controller.js'

const router = Router();

router.get('/tipoidentificacion/getTiposIdentificacion', getTiposIdentificacion);

router.get('/tipoidentificacion/getTiposIdentificacionIVA/:id', getTiposIdentificacionIVA);

export default router