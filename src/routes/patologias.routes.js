import { Router } from 'express'
import { getPatologias, newPatologia, updatePatologia } from '../controllers/patologias.controller.js'

const router = Router();

router.put('/patologia/newPatologia', newPatologia);

router.put('/patologia/updatePatologia/:id', updatePatologia)

router.get('/patologia/getPatologias', getPatologias);


export default router