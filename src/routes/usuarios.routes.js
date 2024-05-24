import { Router } from 'express'
import { loginUsuario, getUsuarios, getRepositories, getUsuarioTipos, updateIngreso } from '../controllers/usuarios.controller.js'

const router = Router();

router.post('/usuarios/login', loginUsuario);

router.get('/usuarios/getUsuarios', getUsuarios)

router.get('/usuarios/getUsuarioTipos', getUsuarioTipos)

router.get('/usuarios/getRepositories', getRepositories)

router.put('/usuarios/updateIngreso/:id', updateIngreso)

export default router