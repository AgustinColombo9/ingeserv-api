import { Router } from 'express'
import { getTiposProducto } from '../controllers/tipoproducto.controller.js'

const router = Router();

router.get('/tipoproducto/getTiposProducto', getTiposProducto);

export default router;