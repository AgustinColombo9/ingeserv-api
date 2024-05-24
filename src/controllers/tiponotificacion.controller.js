import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";

export const getTiposNotificacion = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getTiposNotificacion);

        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};

export const newTipoNotificacion = async (req, res) => {
    const {
        tipo_descripcion,  
        tipo_borde_color, 
        tipo_fondo_color 
    } = req.body;
    
    try { 
        const pool = await getConnection(); 
        const result = await pool.request()  
        .input("tipo_descripcion", sql.VarChar, tipo_descripcion) 
        .input("tipo_borde_color", sql.VarChar, tipo_borde_color) 
        .input("tipo_fondo_color", sql.VarChar, tipo_fondo_color) 
        .query(queries.newTipoNotificacion); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }     
};

export const updateTipoNotificacion = async (req, res) => {
    const { id } = req.params;

    const {
        tipo_descripcion,  
        tipo_borde_color, 
        tipo_fondo_color  
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input("tipo_descripcion", sql.VarChar, tipo_descripcion) 
        .input("tipo_borde_color", sql.VarChar, tipo_borde_color) 
        .input("tipo_fondo_color", sql.VarChar, tipo_fondo_color) 
        .input('id', sql.BigInt, id)
        .query(queries.updateTipoNotificacion); 

        res.json({ message: "OK" });
        console.log('CORRECTO')
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    }     
}; 
