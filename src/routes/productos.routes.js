import { Router } from 'express'
import { 
    newProducto, 
    updateProducto, 
    deleteProducto, 
    activarProducto, 
    getProductoId, 
    getProductosCategoriaId, 
    getProductos, 
    getProductosRubroId, 
    getProductosProveedorId, 
    getProductosEquiposClienteId, 
    getProductosConsumiblesClienteId, 
    getProductoEquipoDetalleClienteId, 
    getProductoConsumibleDetalleClienteId,
    getProductoEquipoHistorialId,
    newProductoEquipoAsignar,
    updateProductoEquipoAsignar,
    deleteProductoEquipoAsignar,
    getProductosConsumibles,
    getProductosEquipos,
    updateImagenProducto,
    getUltimoProductoId, 
    getProductosCard,
    getProductosCategoriaIdCard, 
    getCaracteristicasProductoId, 
    newCaracteristicaProducto, 
    updateCaracteristicaProductoId, 
    deleteCaracteristicaProductoId,  
    saveProductoEquipoAsignar 
} from '../controllers/productos.controller.js'

const router = Router();

router.put('/productos/newProducto', newProducto)

router.put('/productos/updateProducto/:id', updateProducto)

router.put('/productos/updateImagenProducto/:id', updateImagenProducto)

router.delete('/productos/deleteProducto/:id', deleteProducto)

router.put('/productos/activarProducto/:id', activarProducto)

router.get('/productos/getProductoId/:id', getProductoId)

router.get('/productos/getProductosCategoriaId/:id', getProductosCategoriaId)

router.get('/productos/getProductosCategoriaIdCard/:id', getProductosCategoriaIdCard)

router.get('/productos/getProductosRubroId/:id', getProductosRubroId)

router.get('/productos/getProductosProveedorId/:id', getProductosProveedorId)

router.get('/productos/getProductos', getProductos)

router.get('/productos/getProductosCard', getProductosCard)

router.get('/productos/getProductosEquipos', getProductosEquipos)

router.get('/productos/getProductosConsumibles', getProductosConsumibles)

router.get('/productos/getUltimoProductoId', getUltimoProductoId)

/////////////////////////////////////////////////////////////////////////////

router.get('/productos/getProductosEquiposClienteId/:id', getProductosEquiposClienteId)

router.get('/productos/getProductoEquipoDetalleClienteId/:id', getProductoEquipoDetalleClienteId)

router.get('/productos/getProductosConsumiblesClienteId/:id', getProductosConsumiblesClienteId)

router.get('/productos/getProductoConsumibleDetalleClienteId/:id', getProductoConsumibleDetalleClienteId)

//////////////////////////////////////////////////////////////////////////////

router.get('/productos/getProductoEquipoHistorialId/:id', getProductoEquipoHistorialId)


//////////////////////////////////////////////////////////////////////////////

router.put('/productos/newProductoEquipoAsignar', newProductoEquipoAsignar)

router.put('/productos/updateProductoEquipoAsignar/:id', updateProductoEquipoAsignar)

router.delete('/productos/deleteProductoEquipoAsignar/:id', deleteProductoEquipoAsignar)

/////////////////////////////////////////////////////////////////////////////

router.get('/productos/getCaracteristicasProductoId/:id', getCaracteristicasProductoId)

router.put('/productos/newCaracteristicaProducto', newCaracteristicaProducto);

router.put('/productos/updateCaracteristicaProductoId/:id', updateCaracteristicaProductoId);

router.delete('/productos/deleteCaracteristicaProductoId/:id', deleteCaracteristicaProductoId)

const multer = require('multer')

const storageFactura = multer.diskStorage({
    destination: "./facturas_app/",
    filename: function (req, file, cb) {
        let extension = ''
        if (file.mimetype === "application/pdf")  {
          extension = '.pdf'
        }
        cb(null,  file.originalname+extension);
    },
});
  
const diskStorageFactura = multer({ storage: storageFactura });

router.post('/productos/saveProductoEquipoAsignar', diskStorageFactura.single('file'), saveProductoEquipoAsignar)

export default router;