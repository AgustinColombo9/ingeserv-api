import { Router } from 'express'
import { 
    newMarca, 
    updateMarca, 
    getMarcas, 
    getMarcaId 
} from '../controllers/marca.controller.js'

const router = Router();

router.put('/marca/newMarca', newMarca);

router.put('/marca/updateMarca/:id', updateMarca);

router.get('/marca/getMarcas', getMarcas);

router.get('/marca/getMarcaId/:id', getMarcaId);

export default router