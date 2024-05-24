import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";

export const getArchivosUsuarioId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.getArchivosUsuarioId); 

        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};

export const newArchivo = async (req, res) => {
    const {
        archivo_descripcion, 
        archivo_tipo, 
        archivo_tamanio, 
        archivo_url,
        archivo_fecha,
        archivo_usuario_id 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("archivo_descripcion", sql.VarChar, archivo_descripcion) 
        .input("archivo_tipo", sql.VarChar, archivo_tipo) 
        .input("archivo_tamanio", sql.Numeric, archivo_tamanio) 
        .input("archivo_url", sql.VarChar, archivo_url) 
        .input("archivo_fecha", sql.VarChar, archivo_fecha) 
        .input("archivo_usuario_id", sql.Numeric, archivo_usuario_id) 
        .query(queries.newArchivo); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }     
};

export const getArchivosRazones = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getArchivosRazones); 

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