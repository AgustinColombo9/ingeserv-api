import Router from 'express'
import { 
    newBanner, 
    updateBanner, 
    deleteBanner, 
    getBanners, 
    getBannerId, 
    getBannersEstadoId, 
    getVentanas  
} from '../controllers/banners.controller.js'

const router = Router();

router.put('/banners/newBanner', newBanner);

router.put('/banners/updateBanner/:id', updateBanner)

router.delete('/banners/deleteBanner/:id', deleteBanner)

router.get('/banners/getBanners/:id', getBanners)

router.get('/banners/getBannerId/:id', getBannerId)

router.get('/banners/getBannersEstadoId/:id', getBannersEstadoId)

router.get('/banners/getVentanas', getVentanas)

export default router;