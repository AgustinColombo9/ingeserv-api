import { Router } from 'express'
import { 
    newService, 
    updateService,
    deleteService, 
    getServiceId, 
    getServices, 
    getServicesEmpleadoId, 
    newServiceTarea,
    updateServiceTarea,
    deleteServiceTarea,
    getServiceTareasServiceId,
    getServiceTareaId, 
    newServiceInsumo,
    updateServiceInsumo,
    deleteServiceInsumo,
    getServiceInsumosServiceId,
    getServiceInsumoId,
    getServiceInsumosTareaId,
    getServiceTareas,
    getEstadosTarea
} from '../controllers/service.controller.js'

const router = Router();

router.put('/services/newService', newService)

router.put('/services/updateService/:id', updateService)

router.delete('/services/deleteService/:id', deleteService)

router.get('/services/getServices', getServices)

router.get('/services/getServiceId/:id', getServiceId)

router.get('/services/getServicesEmpleadoId/:id', getServicesEmpleadoId)

///////////////////////////////////////////////////////////////////////

router.put('/services/newServiceTarea', newServiceTarea)

router.put('/services/updateServiceTarea/:id', updateServiceTarea)

router.delete('/services/deleteServiceTarea/:id', deleteServiceTarea)

router.get('/services/getServiceTareasServiceId/:id', getServiceTareasServiceId)

router.get('/services/getServiceTareaId/:id', getServiceTareaId)

///////////////////////////////////////////////////////////////////////

router.put('/services/newServiceInsumo', newServiceInsumo)

router.put('/services/updateServiceInsumo/:id', updateServiceInsumo)

router.delete('/services/deleteServiceInsumo/:id', deleteServiceInsumo)

router.get('/services/getServiceInsumosServiceId/:id', getServiceInsumosServiceId)

router.get('/services/getServiceInsumosTareaId/:id', getServiceInsumosTareaId)

router.get('/services/getServiceInsumoId/:id', getServiceInsumoId)

///////////////////////////////////////////////////////////////////////

router.get('/services/getServiceTareas', getServiceTareas)

router.get('/services/getEstadosTarea', getEstadosTarea)

export default router;