import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";
import path from 'path';
import fs from 'fs';
import multiparty from 'multiparty'

/*
export const newOferta = async (req, res) => {
    try {
        const file = req.file;
        const {
            oferta_fecha,
            oferta_vigencia,
            oferta_descripcion,
            oferta_cliente_id,
            oferta_observacion,
            oferta_estado_id,
        } = req.body;

        const pool = await getConnection(); 
        await pool.request() 
        .input("oferta_fecha", sql.VarChar, oferta_fecha)
        .input("oferta_vigencia", sql.VarChar, oferta_vigencia)
        .input("oferta_descripcion", sql.VarChar, oferta_descripcion)
        .input("oferta_cliente_id", sql.Numeric, oferta_cliente_id) 
        .input("oferta_observacion", sql.NVarChar, oferta_observacion) 
        .input("oferta_imagen", sql.VarChar, oferta_imagen) 
        .input("oferta_estado_id", sql.Numeric, oferta_estado_id)
        .query(queries.newOferta); 

        console.log('GUARDO CABECERA')

        //const primaryKey = result.recordset[0].CLIENTE_OFERTA_CAB_ID;
        const primaryKey = await getUltimaOferta()

        console.log('PK: '+ primaryKey)

        //const { file } = req.files;
        //const { file } = formData

        console.log('FILE '+file)

        if (!file) {
          return res.status(400).json({ error: 'No se proporcionó ningún archivo' });
        }
    
        const myFile = file;
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
          
          console.log('SERVER FILE PATH '+serverFilePath);

          const imagePath = path.join('archivos_app', file.name); // Esto asume que 'archivos_app' es la carpeta donde se guarda el archivo
          
          console.log('image path: '+imagePath)

          updateClienteOfertaCabImagen(primaryKey, imagePath);

          //res.json({ message: 'OK' });
          console.log('CORRECTO ARCHIVO');
        });

        res.json({ message: "OK" });
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
*/

const IMAGE_DIR = './archivos_app'


export const newOferta2 = async (req, res) => {
    console.log('NEW OFERTA 2')
    let form = new multiparty.Form({ file: IMAGE_DIR })

    form.parse(req, function(err, fields, files){
        console.log('fields '+fields)
        console.log('file '+files)
    })

    console.log('NUEVO 2')

    const { fecha, vigencia, descripcion, clienteId, observacion, estadoId } = req.params;
    const { file } = req.files;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("oferta_fecha", sql.VarChar, fecha)
        .input("oferta_vigencia", sql.VarChar, vigencia)
        .input("oferta_descripcion", sql.VarChar, descripcion)
        .input("oferta_cliente_id", sql.Numeric, clienteId) 
        .input("oferta_observacion", sql.NVarChar, observacion) 
        .input("oferta_imagen", sql.VarChar, imagen) 
        .input("oferta_estado_id", sql.Numeric, estadoId)
        .query(queries.newOferta); 

        console.log('GUARDO CABECERA')

        //const primaryKey = result.recordset[0].CLIENTE_OFERTA_CAB_ID;
        const primaryKey = await getUltimaOferta()

        console.log('PK: '+ primaryKey)

        console.log('FILE '+file)

        if (!file) {
          return res.status(400).json({ error: 'No se proporcionó ningún archivo' });
        }
    
        const myFile = file;
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
          
          console.log('SERVER FILE PATH '+serverFilePath);

          const imagePath = path.join('archivos_app', file.name); // Esto asume que 'archivos_app' es la carpeta donde se guarda el archivo
          
          console.log('image path: '+imagePath)

          updateClienteOfertaCabImagen(primaryKey, imagePath);

          //res.json({ message: 'OK' });
          console.log('CORRECTO ARCHIVO');
        });

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    } 
}

export const newOferta = async (req, res) => {
    console.log('NUEVO')

    // Los datos de formulario están disponibles en req.body
    const oferta_fecha = req.body.oferta_fecha;
    const oferta_vigencia = req.body.oferta_vigencia;
    const oferta_descripcion = req.body.oferta_descripcion;
    const oferta_cliente_id = req.body.oferta_cliente_id;
    const oferta_observacion = req.body.oferta_observacion;
    const oferta_imagen = req.body.oferta_imagen;
    const oferta_estado_id = req.body.oferta_estado_id;

    // El archivo está disponible en req.file
    const file = req.file;

//    const { file } = req.files;
/*    const {
        oferta_fecha,
        oferta_vigencia,
        oferta_descripcion,
        oferta_cliente_id,
        oferta_observacion,
        oferta_imagen, // Aquí estará vacío ('')
        oferta_estado_id,
    } = req.body; 
*/
//    console.log('form data '+file)

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("oferta_fecha", sql.VarChar, oferta_fecha)
        .input("oferta_vigencia", sql.VarChar, oferta_vigencia)
        .input("oferta_descripcion", sql.VarChar, oferta_descripcion)
        .input("oferta_cliente_id", sql.Numeric, oferta_cliente_id) 
        .input("oferta_observacion", sql.NVarChar, oferta_observacion) 
        .input("oferta_imagen", sql.VarChar, oferta_imagen) 
        .input("oferta_estado_id", sql.Numeric, oferta_estado_id)
        .query(queries.newOferta); 

        console.log('GUARDO CABECERA')

        //const primaryKey = result.recordset[0].CLIENTE_OFERTA_CAB_ID;
        const primaryKey = await getUltimaOferta()

        console.log('PK: '+ primaryKey)

        console.log('FILE '+file)

        if (!file) {
          return res.status(400).json({ error: 'No se proporcionó ningún archivo' });
        }
    
        const myFile = file;
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
          
          console.log('SERVER FILE PATH '+serverFilePath);

          const imagePath = path.join('archivos_app', file.name); // Esto asume que 'archivos_app' es la carpeta donde se guarda el archivo
          
          console.log('image path: '+imagePath)

          updateClienteOfertaCabImagen(primaryKey, imagePath);

          //res.json({ message: 'OK' });
          console.log('CORRECTO ARCHIVO');
        });

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }  
};

const updateClienteOfertaCabImagen = async (primaryKey, imagePath) => {
    try {
        const pool = await getConnection();
        await pool.request()
            .input("CLIENTE_OFERTA_CAB_IMAGEN", sql.VarChar, imagePath)
            .input("id", sql.Numeric, primaryKey)
            .query(queries.updateClienteOfertaCabImagen);

        console.log(`Campo CLIENTE_OFERTA_CAB_IMAGEN actualizado para la oferta con ID ${primaryKey}`);
    } catch (error) {
        console.error('Error al actualizar CLIENTE_OFERTA_CAB_IMAGEN:', error);
        throw error; // Puedes manejar el error según tus necesidades
    }
};

const getUltimaOferta = async () => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('SELECT MAX(cliente_oferta_cab_id) AS maxId FROM cliente_oferta_cab');
        return result.recordset[0].maxId;
    } catch (error) {
        // Manejo de errores aquí
        console.error('Error al obtener la última oferta:', error);
        throw error;
    }
};

export const updateOferta = async (req, res) => {
    const { id } = req.params;
    console.log('UPDATE')

    const {
        oferta_fecha, 
        oferta_vigencia, 
        oferta_descripcion, 
        oferta_cliente_id, 
        oferta_observacion, 
        oferta_imagen, 
        oferta_estado_id, 
    } = req.body;   

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("oferta_fecha", sql.VarChar, oferta_fecha)
        .input("oferta_vigencia", sql.VarChar, oferta_vigencia)
        .input("oferta_descripcion", sql.NVarChar, oferta_descripcion) 
        .input("oferta_cliente_id", sql.Numeric, oferta_cliente_id) 
        .input("oferta_observacion", sql.NVarChar, oferta_observacion) 
        .input("oferta_imagen", sql.VarBinary, oferta_imagen) 
        .input("oferta_estado_id", sql.Numeric, oferta_estado_id)
        .input("id", sql.BigInt, id)
        .query(queries.updateOferta); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }  
};

export const cerrarOferta = async (req, res) => {
    const { id } = req.params;
    console.log('UPDATE') 

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("id", sql.BigInt, id)
        .query(queries.cerrarOferta); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }  
};

export const getOfertaId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getOfertaId);
        
        res.json(result.recordset[0]);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getOfertasClienteId = async (req, res) => {
    const { id } = req.params;

    try{
        const pool = await getConnection();
        const result = await pool 
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.getOfertasClienteId)

        res.status(200).json(result.recordset)
    }
    catch (error) {
        console.log("ERROR: "+ error)

        res.status(500);
        res.send(error.message)
    }
}

export const getOfertasEstadoId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getOfertasEstadoId);
        
        res.status(200).json(result.recordset)
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getOfertas = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getOfertas);
        
        res.status(200).json(result.recordset)
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
}

export const getOfertasDetalleOfertaId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getOfertasDetalleOfertaId);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
}

export const getOfertaDetalleId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getOfertaDetalleId);
        
        res.json(result.recordset[0]);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
}

export const saveOfertaDetalle = async (req, res) => {
    console.log('NUEVO')
    const detalles = req.body.detalles;

    try {
        const pool = await getConnection();

        for (const detalle of detalles) {
            const {
                oferta_id, 
                oferta_cab_id, 
                oferta_producto_id, 
                oferta_producto_precio, 
                oferta_precio, 
                oferta_observacion
            } = detalle;

            console.log('OFERTA DETALLE ID: '+oferta_id)
            if (oferta_id) {
                await pool.request()
                    .input("oferta_cab_id", sql.Numeric, oferta_cab_id)
                    .input("oferta_producto_id", sql.Numeric, oferta_producto_id)
                    .input("oferta_producto_precio", sql.Numeric, oferta_producto_precio)
                    .input("oferta_precio", sql.Numeric, oferta_precio)
                    .input("oferta_observacion", sql.VarChar, oferta_observacion)
                    .query(queries.newOfertaDetalle);
            }
            else {
                await pool.request()
                    .input("oferta_producto_id", sql.Numeric, oferta_producto_id)
                    .input("oferta_producto_precio", sql.Numeric, oferta_producto_precio)
                    .input("oferta_precio", sql.Numeric, oferta_precio)
                    .input("oferta_observacion", sql.VarChar, oferta_observacion)
                    .input("id", sql.BigInt, id)
                    .query(queries.updateOfertaDetalle);
            }
            
        }

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }     
}; 

export const getOfertasEstados = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getOfertasEstados); 
        
        res.status(200).json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
}

export const updateFile = async (req, res) => {
    const { id } = req.params;

    console.log('GUARDAR ARCHIVO EN SERVIDOR')

    try {
        
        const { file } = req.files;

        if (!file) {
          return res.status(400).json({ error: 'No se proporcionó ningún archivo' });
        }
    
        const myFile = file;
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