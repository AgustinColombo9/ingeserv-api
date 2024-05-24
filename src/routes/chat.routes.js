import { Router } from 'express'
import { 
    getChatsUsuarioId, 
    newChatGroup, 
    updateChatGroup, 
    deleteChatGroup, 
    getChatsContainerId, 
    newChatMessage, 
    deleteChatMessage, 
    readMessage 
} from '../controllers/chat.controller.js'

const router = Router();

router.get('/chat/getChatsUsuarioId/:id', getChatsUsuarioId);

router.put('/chat/newChatGroup', newChatGroup);

router.put('/chat/updateChatGroup/:id', updateChatGroup);

router.delete('/chat/deleteChatGroup/:id', deleteChatGroup);

router.get('/chat/getChatsContainerId/:id', getChatsContainerId);

router.put('/chat/newChatMessage', newChatMessage);

router.put('/chat/deleteChatMessage/:id', deleteChatMessage);

router.put('/chat/readMessage/:id', readMessage)

export default router;