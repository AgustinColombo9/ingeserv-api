import { Router } from 'express'
import { getTransacciones } from '../controllers/transacciones.controller.js'

const router = Router();

router.get('/transacciones/getTransacciones', getTransacciones);

export default router