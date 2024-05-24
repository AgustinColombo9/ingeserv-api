import { Router } from 'express'
import { getProvincias, newProvincia, updateProvincia } from '../controllers/provincia.controller.js'

const router = Router();

router.put('/provincia/newProvincia', newProvincia);

router.put('/provincia/updateProvincia/:id', updateProvincia)

router.get('/provincia/getProvincias', getProvincias);

export default router;