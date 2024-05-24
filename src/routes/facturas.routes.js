import { Router } from 'express'
import { 
    newFactura, 
    updateFactura, 
    getFacturas, 
    getFacturasEstadoId, 
    newFacturaProductoAsignado, 
    deleteFacturaProductoAsignado, 
    getFacturasProductoAsignadoId, 
    getFacturaEstados, 
    saveFactura 
} from '../controllers/facturas.controller.js'

const router = Router();

router.put('/facturas/newFactura', newFactura);

router.put('/facturas/updateFactura/:id', updateFactura);

router.get('/facturas/getFacturas', getFacturas);

router.get('/facturas/getFacturasEstadoId/:id', getFacturasEstadoId);

router.put('/facturas/newFacturaProductoAsignado', newFacturaProductoAsignado);

router.delete('/facturas/deleteFacturaProductoAsignado/:id', deleteFacturaProductoAsignado)

router.get('/facturas/getFacturasProductoAsignadoId/:id', getFacturasProductoAsignadoId);

router.get('/facturas/getFacturaEstados', getFacturaEstados);

const multer = require('multer')

const storageFactura = multer.diskStorage({
    destination: "./facturas_app/",
    filename: function (req, file, cb) {
        let extension = '';
        if (file.mimetype === "application/pdf")  {
            extension = '.pdf';
        } else if (file.mimetype.startsWith("image/")) {
            const imageExtension = file.mimetype.split("/")[1];
            extension = `.${imageExtension}`;
        }
        cb(null, file.originalname + extension);
    },
});

const diskStorageFactura = multer({ storage: storageFactura });

router.post('/facturas/saveFactura', diskStorageFactura.single('file'), saveFactura);


export default router;