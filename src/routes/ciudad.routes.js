import { Router } from 'express'
import { 
    getCiudades, 
    getCiudadesProvinciaId, 
    newCiudad, 
    updateCiudad 
} from '../controllers/ciudad.controller.js'

const router = Router();

router.put('/ciudad/newCiudad', newCiudad);

router.put('/ciudad/updateCiudad/:id', updateCiudad);

router.get('/ciudad/getCiudades', getCiudades);

router.get('/ciudad/getCiudadesProvinciaId/:id', getCiudadesProvinciaId);

export default router