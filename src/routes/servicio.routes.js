import { Router } from 'express'
import { getServicios } from '../controllers/servicio.controller.js'

const router = Router();

router.get('/servicio/getServicios', getServicios);

export default router;