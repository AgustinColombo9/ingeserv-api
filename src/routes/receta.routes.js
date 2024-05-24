import { Router } from 'express'
import { 
    newReceta, 
    updateReceta, 
    deleteReceta, 
    getRecetaId,
    getRecetasClienteId,
    getEstadosReceta,
    getRecetasEstadoId,
    getRecetasClienteEstadoId, 
    updateImagenReceta,
    updateFile
} from '../controllers/receta.controller.js'

const router = Router();

router.put('/recetas/newReceta', newReceta)

router.put('/recetas/updateReceta/:id', updateReceta)

router.put('/recetas/updateImagenReceta/:id', updateImagenReceta)

router.delete('/recetas/deleteReceta/:id', deleteReceta)

router.put('/recetas/getRecetaId/:id', getRecetaId)

router.get('/recetas/getRecetasClienteId/:id', getRecetasClienteId)

router.get('/recetas/getRecetasClienteEstadoId/:cliente_id/:estado_id', getRecetasClienteEstadoId)

router.get('/recetas/getRecetasEstadoId/:id', getRecetasEstadoId)

router.put('/recetas/updateFile/:id', updateFile)

/////////////////////////////////////////////////////////////////////////////

router.get('/recetas/getEstadosReceta', getEstadosReceta)

export default router;