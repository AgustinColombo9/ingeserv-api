import { Router } from 'express'
import { 
    getCategorias, 
    getCategoriasRubroId, 
    newCategoria, 
    updateCategoria 
} from '../controllers/categoria.controller.js'

const router = Router();

router.put('/categoria/newCategoria', newCategoria);

router.put('/categoria/updateCategoria/:id', updateCategoria);

router.get('/categoria/getCategorias', getCategorias);

router.get('/categoria/getCategoriasRubroId/:id', getCategoriasRubroId);

export default router;