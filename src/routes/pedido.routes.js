import { Router } from 'express'
import { 
    deletePedidoCabecera, 
    getPedidoCabeceraId, 
    getPedidoEstados, 
    getPedidosEstadoId, 
    getPedidosUsuarioId, 
    getPedidosUsuarioEstadoId, 
    getUltimoPedidoId, 
    newPedidoCabecera, 
    updatePedidoCabecera,
    updateImagenPedido, 
} from '../controllers/pedido.controller.js'

const router = Router();

router.get('/pedidos/getPedidosEstadoId/:id', getPedidosEstadoId)

router.get('/pedidos/getPedidoEstados', getPedidoEstados)

router.get('/pedidos/getPedidoCabeceraId/:id', getPedidoCabeceraId)

router.put('/pedidos/newPedidoCabecera', newPedidoCabecera)

router.put('/pedidos/updatePedidoCabecera/:id', updatePedidoCabecera)

router.put('/pedidos/updateImagenPedido/:id', updateImagenPedido)

router.delete('/pedidos/deletePedidoCabecera/:id', deletePedidoCabecera)

router.get('/pedidos/getUltimoPedidoId', getUltimoPedidoId)

router.get('/pedidos/getPedidosUsuarioId/:id', getPedidosUsuarioId)

router.get('/pedidos/getPedidosUsuarioEstadoId/:id/:estado_id', getPedidosUsuarioEstadoId)

export default router;