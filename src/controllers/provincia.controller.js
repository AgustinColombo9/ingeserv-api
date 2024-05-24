import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";

export const newProvincia = async (req, res) => {
    const {
        provincia_descripcion, 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
            .input("provincia_descripcion", sql.VarChar, provincia_descripcion) 
            .query(queries.newProvincia);

        const id = await pool.request() 
            .query(queries.getUltimaProvinciaId);

        res.json({ message: "OK", PROVINCIA_ID: id.recordset[0].PROVINCIA_ID });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }    
};

export const updateProvincia = async (req, res) => {
    const { id } = req.params;
    
    const {
        provincia_descripcion, 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input('id', sql.BigInt, id) 
        .input("provincia_descripcion", sql.VarChar, provincia_descripcion) 
        .query(queries.updateProvincia); 

        res.json({ message: "OK" });
        console.log('CORRECTO')
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO')
    }   
};

export const getProvincias = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getProvincias);

        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};