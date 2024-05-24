import { Router } from 'express'
import { 
    deletePresupuesto, 
    getPresupuestoDestinatarios, 
    newPresupuestoDestinatario, 
    updatePresupuestoDestinatario, 
    getPresupuestoEstados, 
    getPresupuestoId, 
    getPresupuestoServicios, 
    newPresupuestoServicio, 
    updatePresupuestoServicio, 
    getPresupuestosClienteEstadoId, 
    getPresupuestosClienteId, 
    getPresupuestosEstadoId, 
    newPresupuesto, 
    updateImagenPresupuesto, 
    updatePresupuesto, 
    getPresupuestoDetallePresupuestoId, 
    getPresupuestoDetalleId, 
    newPresupuestoDetalle, 
    updatePresupuestoDetalle, 
    savePresupuestoDetalle,
    updateFile
} from '../controllers/presupuestos.controller.js'

const router = Router();

router.put('/presupuestos/newPresupuesto', newPresupuesto)

router.put('/presupuestos/updatePresupuesto/:id', updatePresupuesto)

router.put('/presupuestos/updateImagenPresupuesto/:id', updateImagenPresupuesto)

router.delete('/presupuestos/deletePresupuesto/:id', deletePresupuesto)

router.get('/presupuestos/getPresupuestoId/:id', getPresupuestoId)

router.get('/presupuestos/getPresupuestosClienteId/:id', getPresupuestosClienteId)

router.get('/presupuestos/getPresupuestosClienteEstadoId/:cliente_id/:estado_id', getPresupuestosClienteEstadoId)

router.get('/presupuestos/getPresupuestosEstadoId/:id', getPresupuestosEstadoId)

/////////////////////////////////////////////////////////////////////////////

router.get('/presupuestos/getPresupuestoEstados', getPresupuestoEstados)

router.put('/presupuestos/newPresupuestoServicio', newPresupuestoServicio);

router.put('/presupuestos/updatePresupuestoServicio/:id', updatePresupuestoServicio);

router.get('/presupuestos/getPresupuestoServicios', getPresupuestoServicios)

router.put('/presupuestos/newPresupuestoDestinatario', newPresupuestoDestinatario); 

router.put('/presupuestos/updatePresupuestoDestinatario/:id', updatePresupuestoDestinatario)

router.get('/presupuestos/getPresupuestoDestinatarios', getPresupuestoDestinatarios)

//////////////////////////////////////////////////////////////////////////////

router.get('/presupuestos/getPresupuestoDetallePresupuestoId/:id', getPresupuestoDetallePresupuestoId)

router.get('/presupuestos/getPresupuestoDetalleId/:id', getPresupuestoDetalleId)

router.put('/presupuestos/newPresupuestoDetalle', newPresupuestoDetalle)

router.put('/presupuestos/savePresupuestoDetalle', savePresupuestoDetalle)

router.put('/presupuestos/updatePresupuestoDetalle/:id', updatePresupuestoDetalle)

router.put('/presupuestos/updateFile/:id', updateFile)

export default router;