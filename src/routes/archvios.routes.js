import { Router } from 'express'
import { getArchivosRazones, getArchivosUsuarioId, newArchivo } from '../controllers/archivos.controller.js'

const router = Router();

router.get('/archivos/getArchivosUsuarioId/:id', getArchivosUsuarioId);

router.get('/archivos/getArchivosRazones', getArchivosRazones);

router.put('/archivos/newArchivo', newArchivo);



export default router;