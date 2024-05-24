import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";

export const getChatsUsuarioId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool 
        .request()
        .input('id', id)
        .query(queries.getChatsUsuarioId)

        res.json(result.recordset);
    }
    catch (error) {
        console.log ("ERROR");
        
        res.status(500);
        res.send(error.message);
    }
};

export const newChatGroup = async (req, res) => {
    const {
        chat_fecha, 
        chat_nombre, 
        chat_usuario_id, 
        chat_destinatario_id 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        const result = await pool.request() 
        .input("chat_fecha", sql.VarChar, chat_fecha) 
        .input("chat_nombre", sql.VarChar, chat_nombre) 
        .input("chat_usuario_id", sql.Numeric, chat_usuario_id) 
        .input("chat_destinatario_id", sql.Numeric, chat_destinatario_id) 
        .query(queries.newChatGroup); 

        const newChatGroupId = result.recordset[0].CHAT_CONTAINER_ID; 

        res.json({ message: "OK", newChatGroupId });

        //res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }     
};

export const updateChatGroup = async (req, res) => {
    const { id } = req.params;

    const {
        chat_nombre  
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input("chat_nombre", sql.VarChar, chat_nombre) 
        .input('id', sql.BigInt, id)
        .query(queries.updateChatGroup); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    }     
};

export const deleteChatGroup = async (req, res) => {
    const { id } = req.params;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input('id', sql.BigInt, id) 
        .query(queries.deleteChatGroup); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    } 
}

export const getChatsContainerId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getChatsContainerId)

        res.json(result.recordset);
    }
    catch (error) {
        console.log ("ERROR");
        
        res.status(500);
        res.send(error.message);
    }
};

export const newChatMessage = async (req, res) => {
    const {
        chat_fecha, 
        chat_hora, 
        chat_mensaje, 
        chat_estado, 
        chat_container_id,  
        chat_usuario_id 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("chat_fecha", sql.VarChar, chat_fecha) 
        .input("chat_hora", sql.VarChar, chat_hora)
        .input("chat_mensaje", sql.VarChar, chat_mensaje) 
        .input("chat_estado", sql.Numeric, chat_estado) 
        .input("chat_container_id", sql.Numeric, chat_container_id) 
        .input("chat_usuario_id", sql.Numeric, chat_usuario_id) 
        .query(queries.newChatMessage); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }     
};

export const deleteChatMessage = async (req, res) => {
    const { id } = req.params;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input('id', sql.BigInt, id)
        .query(queries.deleteChatMessage); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    }     
};

export const readMessage = async (req, res) => {
    const { id } = req.params;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input("chat_message_estado", sql.Bit, 1) 
        .input('id', sql.BigInt, id)
        .query(queries.readMessage); 

        res.json({ message: "LEIDO" });
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    }     
};