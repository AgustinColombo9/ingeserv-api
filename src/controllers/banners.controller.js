import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";

export const newBanner = async (req, res) => {
    try {
        const {
            banners_cab_id, 
            banners_titulo, 
            banners_titulo_color, 
            banners_titulo_tamanio, 
            banners_titulo_pos_vertical, 
            banners_titulo_pos_horizontal,
            banners_descripcion, 
            banners_descripcion_color, 
            banners_descripcion_tamanio, 
            banners_descripcion_pos_vertical, 
            banners_descripcion_pos_horizontal, 
            banners_borde_color, 
            banners_accion, 
            banners_accion_celular, 
            banners_link, 
            banners_ventana_id, 
            banners_producto_id, 
            banners_boton_activo, 
            banners_boton_accion, 
            banners_boton_borde, 
            banners_boton_fondo, 
            banners_fondo_color, 
            banners_fondo_imagen, 
            banners_boton_label, 
            banners_boton_label_color, 
            banners_boton_pos_vertical, 
            banners_boton_pos_horizontal, 
            banners_estado, 
            banners_fecha 
        } = req.body;

        const pool = await getConnection(); 
        await pool.request() 
        .input("banners_cab_id", sql.Numeric, banners_cab_id) 
        .input("banners_titulo", sql.VarChar, banners_titulo)
        .input("banners_titulo_color", sql.VarChar, banners_titulo_color)
        .input("banners_titulo_tamanio", sql.Numeric, banners_titulo_tamanio)
        .input("banners_titulo_pos_vertical", sql.VarChar, banners_titulo_pos_vertical)
        .input("banners_titulo_pos_horizontal", sql.VarChar, banners_titulo_pos_horizontal)
        .input("banners_descripcion", sql.VarChar, banners_descripcion)
        .input("banners_descripcion_color", sql.VarChar, banners_descripcion_color)
        .input("banners_descripcion_tamanio", sql.Numeric, banners_descripcion_tamanio)
        .input("banners_descripcion_pos_vertical", sql.VarChar, banners_descripcion_pos_vertical)
        .input("banners_descripcion_pos_horizontal", sql.VarChar, banners_descripcion_pos_horizontal)
        .input("banners_borde_color", sql.VarChar, banners_borde_color)
        .input("banners_accion", sql.VarChar, banners_accion)
        .input("banners_accion_celular", sql.VarChar, banners_accion_celular)
        .input("banners_link", sql.VarChar, banners_link)
        .input("banners_ventana_id", sql.Numeric, banners_ventana_id)
        .input("banners_producto_id", sql.Numeric, banners_producto_id)
        .input("banners_boton_activo", sql.Bit, banners_boton_activo)
        .input("banners_boton_accion", sql.VarChar, banners_boton_accion)
        .input("banners_boton_borde", sql.VarChar, banners_boton_borde)
        .input("banners_boton_fondo", sql.VarChar, banners_boton_fondo)
        .input("banners_fondo_color", sql.VarChar, banners_fondo_color)
        .input("banners_fondo_imagen", sql.VarChar, banners_fondo_imagen)
        .input("banners_boton_label", sql.VarChar, banners_boton_label)
        .input("banners_boton_label_color", sql.VarChar, banners_boton_label_color)
        .input("banners_boton_pos_vertical", sql.VarChar, banners_boton_pos_vertical)
        .input("banners_boton_pos_horizontal", sql.VarChar, banners_boton_pos_horizontal)
        .input("banners_estado", sql.Bit, banners_estado)
        .input("banners_fecha", sql.VarChar, banners_fecha)

        .query(queries.newBanner); 

        res.json({ message: "OK" });
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const updateBanner = async (req, res) => {
    const { id } = req.params;

    try {
        const {
            banners_cab_id, 
            banners_titulo, 
            banners_titulo_color, 
            banners_titulo_tamanio, 
            banners_titulo_pos_vertical, 
	        banners_titulo_pos_horizontal, 
            banners_descripcion, 
            banners_descripcion_color, 
            banners_descripcion_tamanio, 
            banners_descripcion_pos_vertical, 
	        banners_descripcion_pos_horizontal, 
            banners_borde_color, 
            banners_accion, 
            banners_accion_celular, 
            banners_link, 
            banners_ventana_id, 
            banners_producto_id, 
            banners_boton_activo, 
            banners_boton_accion, 
            banners_boton_color,
            banners_boton_borde, 
            banners_boton_fondo, 
            banners_fondo_color, 
            banners_fondo_imagen, 
            banners_boton_label, 
            banners_boton_label_color, 
            banners_boton_pos_vertical, 
	        banners_boton_pos_horizontal, 
            banners_estado, 
            banners_fecha 
        } = req.body;

        const pool = await getConnection(); 
        await pool.request() 
        .input("banners_cab_id", sql.Numeric, banners_cab_id) 
        .input("banners_titulo", sql.VarChar, banners_titulo)
        .input("banners_titulo_color", sql.VarChar, banners_titulo_color)
        .input("banners_titulo_tamanio", sql.Numeric, banners_titulo_tamanio)
        .input("banners_titulo_pos_vertical", sql.VarChar, banners_titulo_pos_vertical)
        .input("banners_titulo_pos_horizontal", sql.VarChar, banners_titulo_pos_horizontal)
        .input("banners_descripcion", sql.VarChar, banners_descripcion)
        .input("banners_descripcion_color", sql.VarChar, banners_descripcion_color)
        .input("banners_descripcion_tamanio", sql.Numeric, banners_descripcion_tamanio)
        .input("banners_descripcion_pos_vertical", sql.VarChar, banners_descripcion_pos_vertical)
        .input("banners_descripcion_pos_horizontal", sql.VarChar, banners_descripcion_pos_horizontal)
        .input("banners_borde_color", sql.VarChar, banners_borde_color)
        .input("banners_accion", sql.VarChar, banners_accion)
        .input("banners_accion_celular", sql.VarChar, banners_accion_celular)
        .input("banners_link", sql.VarChar, banners_link)
        .input("banners_ventana_id", sql.Numeric, banners_ventana_id)
        .input("banners_producto_id", sql.Numeric, banners_producto_id)
        .input("banners_boton_activo", sql.Bit, banners_boton_activo)
        .input("banners_boton_accion", sql.VarChar, banners_boton_accion)
        .input("banners_boton_borde", sql.VarChar, banners_boton_borde)
        .input("banners_boton_fondo", sql.VarChar, banners_boton_fondo)
        .input("banners_fondo_color", sql.VarChar, banners_fondo_color)
        .input("banners_fondo_imagen", sql.VarChar, banners_fondo_imagen)
        .input("banners_boton_label", sql.VarChar, banners_boton_label)
        .input("banners_boton_label_color", sql.VarChar, banners_boton_label_color)
        .input("banners_boton_pos_vertical", sql.VarChar, banners_boton_pos_vertical)
        .input("banners_boton_pos_horizontal", sql.VarChar, banners_boton_pos_horizontal)
        .input("banners_estado", sql.Bit, banners_estado)
        .input("banners_fecha", sql.VarChar, banners_fecha)
        .input("id", sql.Numeric, id)
        .query(queries.updateBanner); 

        res.json({ message: "OK" });
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const deleteBanner = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        await pool.request()
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.deleteBanner); 
        
        res.status(200).json({ message: "OK" });
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};
    
export const getBanners = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getBanners);

        res.status(200).json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};

export const getBannerId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.getBannerId); 

        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};

export const getBannersEstadoId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.getBannersEstadoId); 

        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};

export const getVentanas = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getVentanas); 

        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};