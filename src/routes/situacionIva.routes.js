import { Router } from 'express'
import { getSituacionesIVA } from '../controllers/situacionIva.controller.js'

const router = Router();

router.get('/situacionIVA/getSituacionesIVA', getSituacionesIVA);

export default router