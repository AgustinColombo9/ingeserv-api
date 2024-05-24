import { Router } from 'express'
import { getProveedorId, getProveedores, newProveedor, updateProveedor } from '../controllers/proveedor.controller.js'

const router = Router();

router.put('/proveedor/newProveedor', newProveedor);

router.put('/proveedor/updateProveedor/:id', updateProveedor)

router.get('/proveedor/getProveedores', getProveedores);

router.get('/proveedor/getProveedorId/:id', getProveedorId);



export default router