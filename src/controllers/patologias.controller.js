import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";

export const newPatologia = async (req, res) => {
    const {
        patologia_descripcion, 
        patologia_observacion
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("patologia_descripcion", sql.VarChar, patologia_descripcion) 
        .input("patologia_observacion", sql.VarChar, patologia_observacion) 
        .query(queries.newPatologia); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }    
}

export const updatePatologia = async (req, res) => {
    const { id } = req.params;
    
    const {
        patologia_descripcion, 
        patologia_observacion
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input('id', sql.BigInt, id) 
        .input("patologia_descripcion", sql.VarChar, patologia_descripcion) 
        .input("patologia_observacion", sql.VarChar, patologia_observacion) 
        .query(queries.updatePatologia); 

        res.json({ message: "OK" });
        console.log('CORRECTO')
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO')
    }   
}

export const getPatologias = async (req, res) => { 
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getPatologias); 
        
        res.status(200).json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 

};