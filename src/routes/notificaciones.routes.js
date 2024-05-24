import Router from 'express'
import { 
    newNotificacion, 
    updateNotificacion, 
    readNotificacion, 
    deleteNotificacion, 
    getNotificaciones, 
    getNotificacionId, 
    getNotificacionesEstadoId, 
    getNotificacionesUsuarioId  
} from '../controllers/notificaciones.controller.js'

const router = Router();

router.put('/notificaciones/newNotificacion', newNotificacion);

router.put('/notificaciones/updateNotificacion/:id', updateNotificacion)

router.put('/notificaciones/readNotificacion/:id', readNotificacion)

router.delete('/notificaciones/deleteNotificacion/:id', deleteNotificacion)

router.get('/notificaciones/getNotificaciones', getNotificaciones)

router.get('/notificaciones/getNotificacionId/:id', getNotificacionId)

router.get('/notificaciones/getNotificacionesEstadoId/:id', getNotificacionesEstadoId)

router.get('/notificaciones/getNotificacionesUsuarioId/:id', getNotificacionesUsuarioId)

export default router;