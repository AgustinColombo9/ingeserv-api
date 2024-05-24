import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";

export const newCiudad = async (req, res) => {
    const {
        ciudad_descripcion, 
        ciudad_provincia_id 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("ciudad_descripcion", sql.VarChar, ciudad_descripcion) 
        .input("ciudad_provincia_id", sql.Numeric, ciudad_provincia_id) 
        .query(queries.newCiudad); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }    
};

export const updateCiudad = async (req, res) => {
    const { id } = req.params;
    
    const {
        ciudad_descripcion, 
        ciudad_provincia_id 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input('id', sql.BigInt, id) 
        .input("ciudad_descripcion", sql.VarChar, ciudad_descripcion) 
        .input("ciudad_provincia_id", sql.Numeric, ciudad_provincia_id) 
        .query(queries.updateCiudad); 

        res.json({ message: "OK" });
        console.log('CORRECTO')
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO')
    }   

};

export const getCiudades = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getCiudades);

        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};

export const getCiudadesProvinciaId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.getCiudadesProvinciaId); 

        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }  
};