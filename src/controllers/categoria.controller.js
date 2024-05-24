import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";

export const newCategoria = async (req, res) => {
    const {
        categoria_descripcion, 
        categoria_rubro_id, 
        categoria_icono
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("categoria_descripcion", sql.VarChar, categoria_descripcion) 
        .input("categoria_rubro_id", sql.Numeric, categoria_rubro_id) 
        .input("categoria_icono", sql.VarChar, categoria_icono) 
        .query(queries.newCategoria); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }    
}

export const updateCategoria = async (req, res) => {
    const { id } = req.params;
    
    const {
        categoria_descripcion, 
        categoria_rubro_id, 
        categoria_icono 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input('id', sql.BigInt, id) 
        .input("categoria_descripcion", sql.VarChar, categoria_descripcion) 
        .input("categoria_rubro_id", sql.Numeric, categoria_rubro_id) 
        .input("categoria_icono", sql.VarChar, categoria_icono) 
        .query(queries.updateCategoria); 

        res.json({ message: "OK" });
        console.log('CORRECTO')
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO')
    }   
}

export const getCategorias = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getCategorias);

        res.status(200).json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};

export const getCategoriasRubroId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.getCategoriasRubroId); 

        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};
