import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";

export const newMarca = async (req, res) => {
    const {
        marca_descripcion
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("marca_descripcion", sql.VarChar, marca_descripcion) 
        .query(queries.newMarca); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }    
}

export const updateMarca = async (req, res) => {
    const { id } = req.params;
    
    const {
        marca_descripcion 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input('id', sql.BigInt, id) 
        .input("marca_descripcion", sql.VarChar, marca_descripcion) 
        .query(queries.updateMarca); 

        res.json({ message: "OK" });
        console.log('CORRECTO')
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO')
    }   
}

export const getMarcas = async (req, res) => { 
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getMarcas); 

        //res.json(result.recordset);
        
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    } 

};

export const getMarcaId = async (req, res) => { 
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getMarcaId);
        
        res.json(result.recordset[0]);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};