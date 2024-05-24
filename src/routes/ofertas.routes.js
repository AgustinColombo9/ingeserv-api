import Router from 'express'
import { 
    newOferta, 
    updateOferta, 
    cerrarOferta, 
    getOfertaId, 
    getOfertasClienteId, 
    getOfertasEstadoId, 
    getOfertasDetalleOfertaId, 
    getOfertaDetalleId, 
    saveOfertaDetalle, 
    getOfertasEstados, 
    updateFile, 
    newOferta2, 
    getOfertas 
} from '../controllers/ofertas.controller.js'

const router = Router();

router.post('/ofertas/newOferta2', newOferta2);

//router.put('/ofertas/newOferta2', upload.single('file'), newOferta2);

//router.put('/ofertas/newOferta', newOferta)

router.put('/ofertas/updateOferta/:id', updateOferta)

router.put('/ofertas/cerrarOferta/:id', cerrarOferta)

router.get('/ofertas/getOfertas', getOfertas)

router.get('/ofertas/getOfertaId/:id', getOfertaId)

router.get('/ofertas/getOfertasClienteId/:id', getOfertasClienteId)

//router.get('/ofertas/getPresupuestosClienteEstadoId/:cliente_id/:estado_id', getPresupuestosClienteEstadoId)

router.get('/ofertas/getOfertasEstadoId/:id', getOfertasEstadoId)

/////////////////////////////////////////////////////////////////////////////

router.get('/ofertas/getOfertasEstados', getOfertasEstados)

//////////////////////////////////////////////////////////////////////////////

router.get('/ofertas/getOfertasDetalleOfertaId/:id', getOfertasDetalleOfertaId)

router.get('/presupuestos/getOfertaDetalleId/:id', getOfertaDetalleId)

router.put('/presupuestos/saveOfertaDetalle', saveOfertaDetalle)

export default router;