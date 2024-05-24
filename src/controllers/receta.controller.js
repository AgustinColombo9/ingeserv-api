import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";
import { Buffer } from 'buffer';
import fs from 'fs';
import path from 'path';

export const newReceta = async (req, res) => {
    console.log('NUEVO')
    const {
        receta_fecha, 
        receta_cliente_id, 
        receta_estado_id, 
        receta_descripcion, 
        receta_autorizo, 
        receta_observacion
    } = req.body;

    console.log('RECECTA NUEVA: '+receta_fecha+'  -  '+receta_cliente_id)

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("receta_fecha", sql.VarChar, receta_fecha) 
        .input("receta_cliente_id", sql.Numeric, receta_cliente_id) 
        .input("receta_estado_id", sql.Numeric, receta_estado_id) 
        .input("receta_descripcion", sql.VarChar, receta_descripcion) 
        .input("receta_autorizo", sql.VarChar, receta_autorizo) 
        .input("receta_observacion", sql.VarChar, receta_observacion)  
        .query(queries.newReceta); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }     
};

export const updateReceta = async (req, res) => {
    const { id } = req.params;
    console.log('UPDATE')

    const {
        receta_fecha, 
        receta_cliente_id, 
        receta_estado_id, 
        receta_descripcion, 
        receta_autorizo, 
        receta_observacion
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input("receta_fecha", sql.VarChar, receta_fecha) 
        .input("receta_cliente_id", sql.Numeric, receta_cliente_id) 
        .input("receta_estado_id", sql.Numeric, receta_estado_id) 
        .input("receta_descripcion", sql.VarChar, receta_descripcion) 
        .input("receta_autorizo", sql.VarChar, receta_autorizo) 
        .input("receta_observacion", sql.VarChar, receta_observacion)
        .input('id', sql.BigInt, id)
        .query(queries.updateReceta); 

        res.json({ message: "OK" });
        console.log('CORRECTO')
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    }     
};

export const deleteReceta = async (req, res) => {
    const { id } = req.params;

    try { 
        const pool = await getConnection();
        await pool.request()
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.deleteReceta); 
        
        res.status(200)
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    } 
};

export const getRecetaId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getRecetaId);
        
        res.json(result.recordset[0]);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getRecetasClienteId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getRecetasClienteId);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getEstadosReceta = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getEstadosReceta);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getRecetasEstadoId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getRecetasEstadoId);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getRecetasClienteEstadoId = async (req, res) => {
    const { cliente_id, estado_id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('cliente_id', cliente_id)
        .input('estado_id', estado_id)
        .query(queries.getRecetasClienteEstadoId);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const updateFile = async (req, res) => {
    const { id } = req.params;

    console.log('GUARDAR ARCHIVO EN SERVIDOR')

    try {
        
        const { selectedFile } = req.files;

        if (!selectedFile) {
          return res.status(400).json({ error: 'No se proporcionó ningún archivo' });
        }
    
        const myFile = selectedFile;
        console.log(myFile);
    
        // Construir la ruta absoluta al directorio archivos_app
        const archivosAppDir = path.join(__dirname, 'archivos_app');
    
        // Crear el directorio si no existe
        if (!fs.existsSync(archivosAppDir)) {
          fs.mkdirSync(archivosAppDir);
        }
    
        console.log('DIRECTORIO ARCHIVOS ' + archivosAppDir);
    
        // Guardar el archivo en el directorio archivos_app
        const serverFilePath = path.join(archivosAppDir, myFile.name);
        myFile.mv(serverFilePath, (err) => {
          if (err) {
            return res.status(500).json({ error: 'Error al mover el archivo' });
          }
    
          console.log('ACTUALIZAR CAMPO IMAGEN POR URL DEL ARCHIVO: '+archivosAppDir);
          


          res.json({ message: 'OK' });
          console.log('CORRECTO');
        });
    } catch (error) {
        console.log('ERROR: ' + error);
        res.status(500).json(error.message);
    }
};

export const updateImagenReceta = async (req, res) => {
    const { id } = req.params;

    const {
        index,
        receta_imagen 
    } = req.body;

    const buffer = Buffer.from (receta_imagen, 'base64')

    try {
        if (parseInt(index) === 0) {
            const pool = await getConnection(); 
            await pool.request() 
            .input("cliente_receta_foto_uno", sql.VarBinary, buffer) 
            .input('id', sql.BigInt, id) 
            .query(queries.updateImagenUnoReceta); 

            res.json({ message: "OK" });
            console.log('CORRECTO')
        }
        else if (parseInt(index) === 1) {
            const pool = await getConnection(); 
            await pool.request() 
            .input("cliente_receta_foto_dos", sql.VarBinary, buffer) 
            .input('id', sql.BigInt, id) 
            .query(queries.updateImagenDosReceta); 

            res.json({ message: "OK" });
            console.log('CORRECTO')
        }
        else if (parseInt(index) === 2) {
            const pool = await getConnection(); 
            await pool.request() 
            .input("cliente_receta_foto_tres", sql.VarBinary, buffer) 
            .input('id', sql.BigInt, id) 
            .query(queries.updateImagenTresReceta); 

            res.json({ message: "OK" });
            console.log('CORRECTO')
        }
        else {
            const pool = await getConnection(); 
            await pool.request() 
            .input("cliente_receta_foto_cuatro", sql.VarBinary, buffer) 
            .input('id', sql.BigInt, id) 
            .query(queries.updateImagenCuatroReceta); 

            res.json({ message: "OK" });
            console.log('CORRECTO')
        }
    }
    catch (error){
        console.log('ERROR: '+error)
    }

}