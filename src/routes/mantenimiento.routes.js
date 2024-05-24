import { Router } from 'express'
import { 
    getPlanesVigencia, 
    newPlanVigencia, 
    updatePlanVigencia, 
    getPlanesMantenimiento, 
    newPlanMantenimiento, 
    savePlanMantenimiento, 
    updatePlanMantenimiento, 
    newPlanMantenimientoProducto, 
    updatePlanMantenimientoProducto, 
    getOrdenMantenimientoEstado, 
    newOrdenMantenimientoEstado, 
    updateOrdenMantenimientoEstado, 
    getOrdenesMantenimientoProductoId, 
    newOrdenMantenimiento, 
    vencimientoOrdenMantenimiento, 
    completarOrdenMantenimiento, 
    getPlanesMantenimientoVigenciaId, 
    getPlanesMantenimientoProductoId, 
    deletePlanMantenimientoProducto, 
    newPlanMantenimientoTrabajo, 
    deletePlanMantenimientoTrabajo, 
    getTrabajosPlanMantenimiento,
    saveTrabajosPlan, 
    newPlanMantenimientoHistorial, 
    updatePlanMantenimientoHistorial, 
    deletePlanMantenimientoHistorial, 
    getPlanMantenimientoHistorialClienteProducto 
} from '../controllers/mantenimiento.controller.js'

const router = Router();

router.get('/mantenimiento/getPlanesVigencia', getPlanesVigencia);

router.put('/mantenimiento/newPlanVigencia', newPlanVigencia);

router.put('/mantenimiento/updatePlanVigencia/:id', updatePlanVigencia);

router.get('/mantenimiento/getPlanesMantenimiento', getPlanesMantenimiento);

router.get('/mantenimiento/getPlanesMantenimientoVigenciaId/:id', getPlanesMantenimientoVigenciaId);

router.get('/mantenimiento/getPlanesMantenimientoProductoId/:id', getPlanesMantenimientoProductoId)

router.put('/mantenimiento/newPlanMantenimiento', newPlanMantenimiento);

router.put('/mantenimiento/savePlanMantenimiento', savePlanMantenimiento);

router.put('/mantenimiento/updatePlanMantenimiento/:id', updatePlanMantenimiento);

router.put('/mantenimiento/newPlanMantenimientoProducto', newPlanMantenimientoProducto);

router.put('/mantenimiento/updatePlanMantenimientoProducto/:id', updatePlanMantenimientoProducto);

router.delete('/mantenimiento/deletePlanMantenimientoProducto/:id', deletePlanMantenimientoProducto);

router.get('/mantenimiento/getOrdenMantenimientoEstado', getOrdenMantenimientoEstado);

router.put('/mantenimiento/newOrdenMantenimientoEstado', newOrdenMantenimientoEstado);

router.put('/mantenimiento/updateOrdenMantenimientoEstado/:id', updateOrdenMantenimientoEstado);

router.get('/mantenimiento/getOrdenesMantenimientoProductoId/:id', getOrdenesMantenimientoProductoId);

router.put('/mantenimiento/newOrdenMantenimiento', newOrdenMantenimiento);

router.put('/mantenimiento/vencimientoOrdenMantenimiento/:id', vencimientoOrdenMantenimiento)

router.put('/mantenimiento/completarOrdenMantenimiento/:id', completarOrdenMantenimiento)

router.put('/mantenimiento/newPlanMantenimientoTrabajo', newPlanMantenimientoTrabajo)

router.delete('/mantenimiento/deletePlanMantenimientoTrabajo/:id', deletePlanMantenimientoTrabajo)

router.get('/mantenimiento/getTrabajosPlanMantenimiento/:id', getTrabajosPlanMantenimiento)

router.post('/mantenimiento/saveTrabajosPlan', saveTrabajosPlan)

router.put('/mantenimiento/newPlanMantenimientoHistorial', newPlanMantenimientoHistorial)

router.put('/mantenimiento/updatePlanMantenimientoHistorial/:id', updatePlanMantenimientoHistorial)

router.delete('/mantenimiento/deletePlanMantenimientoHistorial/:id', deletePlanMantenimientoHistorial)

router.get('/mantenimiento/getPlanMantenimientoHistorialClienteProducto/:clienteId/:productoId', getPlanMantenimientoHistorialClienteProducto)
    
    
export default router;