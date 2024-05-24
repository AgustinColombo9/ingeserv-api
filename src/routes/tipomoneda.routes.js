import { Router } from 'express'
import { getTiposMoneda } from '../controllers/tipomoneda.controller.js'

const router = Router();

router.get('/tipomoneda/getTiposMoneda', getTiposMoneda);

export default router;