import { Router } from 'express'
import { 
    newTrabajo, 
    updateTrabajo,
    deleteTrabajo, 
    getTrabajoId, 
    getTrabajos, 
    newTarea, 
    updateTarea, 
    deleteTarea, 
    getTareaId, 
    getTareas, 
    getTareasTrabajo, 
    newTareaTrabajo, 
    deleteTareaTrabajo, 
    saveTareasTrabajo 
} from '../controllers/trabajos.controller.js'

const router = Router();

router.put('/trabajos/newTrabajo', newTrabajo)

router.put('/trabajos/updateTrabajo/:id', updateTrabajo)

router.delete('/trabajos/deleteTrabajo/:id', deleteTrabajo)

router.get('/trabajos/getTrabajos', getTrabajos)

router.get('/trabajos/getTrabajoId/:id', getTrabajoId)

////////////////////////////////////////////////////////////

router.put('/trabajos/newTarea', newTarea)

router.put('/trabajos/updateTarea/:id', updateTarea) 

router.delete('/trabajos/deleteTarea/:id', deleteTarea) 

router.get('/trabajos/getTareaId/:id', getTareaId)

router.get('/trabajos/getTareas', getTareas) 

router.get('/trabajos/getTareasTrabajo/:id', getTareasTrabajo) 

router.put('/trabajos/newTareaTrabajo', newTareaTrabajo) 

router.delete('/trabajos/deleteTareaTrabajo/:id', deleteTareaTrabajo) 

router.post('/trabajos/saveTareasTrabajo', saveTareasTrabajo)

export default router;