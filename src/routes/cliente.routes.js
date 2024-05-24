import { Router } from 'express'
import { 
    newCliente, 
    updateCliente, 
    deleteCliente, 
    getClienteId, 
    getClientes, 
    getClienteEstados, 
    getClientesEmpleado, 
    updateAvatarCliente, 
    getClienteTipos
} from '../controllers/cliente.controller.js'

const router = Router();

router.put('/clientes/newCliente', newCliente)

router.put('/clientes/updateCliente/:id', updateCliente)

router.delete('/clientes/deleteCliente/:id', deleteCliente)

router.get('/clientes/getClienteId/:id', getClienteId)

router.get('/clientes/getClientes', getClientes)

router.get('/clientes/getClienteEstados', getClienteEstados)

router.get('/clientes/getClienteTipos', getClienteTipos)

router.get('/clientes/getClientesEmpleado', getClientesEmpleado)

router.put('/clientes/updateAvatarCliente/:id', updateAvatarCliente)

export default router;