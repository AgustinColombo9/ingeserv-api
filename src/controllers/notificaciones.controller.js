import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";

export const newNotificacion = async (req, res) => {
    try {
        const {
            notificacion_titulo, 
            notificacion_mensaje, 
            notificacion_fondo_color, 
            notificacion_borde_color, 
            notificacion_boton_label, 
            notificacion_boton_label_color, 
            notificacion_boton_borde_color, 
            notificacion_boton_fondo_color, 
            notificacion_usuario_id, 
            notificacion_estado, 
            notificacion_fecha, 
            notificacion_fecha_read 
        } = req.body;

        const pool = await getConnection(); 
        await pool.request() 
        .input("notificacion_titulo", sql.VarChar, notificacion_titulo)
        .input("notificacion_mensaje", sql.VarChar, notificacion_mensaje)
        .input("notificacion_fondo_color", sql.VarChar, notificacion_fondo_color)
        .input("notificacion_borde_color", sql.VarChar, notificacion_borde_color)
        .input("notificacion_boton_label", sql.VarChar, notificacion_boton_label)
        .input("notificacion_boton_label_color", sql.VarChar, notificacion_boton_label_color)
        .input("notificacion_boton_borde_color", sql.VarChar, notificacion_boton_borde_color)
        .input("notificacion_boton_fondo_color", sql.VarChar, notificacion_boton_fondo_color)
        .input("notificacion_usuario_id", sql.Numeric, notificacion_usuario_id)
        .input("notificacion_estado", sql.Bit, notificacion_estado)
        .input("notificacion_fecha", sql.VarChar, notificacion_fecha)
        .input("notificacion_fecha_read", sql.VarChar, notificacion_fecha_read)
        
        .query(queries.newNotificacion); 

        res.json({ message: "OK" });
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const updateNotificacion = async (req, res) => {
    const { id } = req.params;

    try {
        const {
            notificacion_titulo, 
            notificacion_mensaje, 
            notificacion_fondo_color, 
            notificacion_borde_color, 
            notificacion_boton_label, 
            notificacion_boton_label_color, 
            notificacion_boton_borde_color, 
            notificacion_boton_fondo_color, 
            notificacion_usuario_id, 
            notificacion_estado, 
            notificacion_fecha, 
        } = req.body;

        const pool = await getConnection(); 
        await pool.request() 
        .input("notificacion_titulo", sql.VarChar, notificacion_titulo)
        .input("notificacion_mensaje", sql.VarChar, notificacion_mensaje)
        .input("notificacion_fondo_color", sql.VarChar, notificacion_fondo_color)
        .input("notificacion_borde_color", sql.VarChar, notificacion_borde_color)
        .input("notificacion_boton_label", sql.VarChar, notificacion_boton_label)
        .input("notificacion_boton_label_color", sql.VarChar, notificacion_boton_label_color)
        .input("notificacion_boton_borde_color", sql.VarChar, notificacion_boton_borde_color)
        .input("notificacion_boton_fondo_color", sql.VarChar, notificacion_boton_fondo_color)
        .input("notificacion_usuario_id", sql.Numeric, notificacion_usuario_id)
        .input("notificacion_estado", sql.Bit, notificacion_estado)
        .input("notificacion_fecha", sql.VarChar, notificacion_fecha)
        .input("id", sql.Numeric, id)
        .query(queries.updateNotificacion); 

        res.json({ message: "OK" });
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const readNotificacion = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.readNotificacion); 

        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
}

export const deleteNotificacion = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.deleteNotificacion); 

        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};
    
export const getNotificaciones = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getNotificaciones);

        res.status(200).json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};

export const getNotificacionId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.getNotificacionId); 

        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};

export const getNotificacionesEstadoId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.getNotificacionesEstadoId); 

        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};

export const getNotificacionesUsuarioId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.getNotificacionesUsuarioId); 

        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};