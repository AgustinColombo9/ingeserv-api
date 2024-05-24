import { Router } from 'express'
import { getCondiciones } from '../controllers/condicion.controller.js'

const router = Router();

router.get('/condicion/getCondiciones', getCondiciones);

export default router;