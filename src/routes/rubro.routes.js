import { Router } from 'express'
import { getRubros } from '../controllers/rubro.controller.js'

const router = Router();

router.get('/rubro/getRubros', getRubros);

export default router;