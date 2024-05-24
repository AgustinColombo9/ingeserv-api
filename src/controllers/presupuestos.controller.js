import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";
import path from 'path';
import fs from 'fs';

export const newPresupuesto = async (req, res) => {
    console.log('NUEVO')
  /*  const {
        presupuesto_cliente_id, 
        presupuesto_fecha, 
        presupuesto_estado_id, 
        presupuesto_nombre_apellido, 
        presupuesto_edad, 
        presupuesto_dni,
        presupuesto_celular,
        presupuesto_medico_tratante,
        presupuesto_patologias,
        presupuesto_servicio_id,
        presupuesto_foto_uno, 
        presupuesto_foto_dos, 
        presupuesto_foto_tres,
        presupuesto_destinatario_id,
        presupuesto_destinatario,
        presupuesto_domicilio,
        presupuesto_ciudad_id,
        presupuesto_codigo_postal,
        presupuesto_provincia_id
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("presupuesto_cliente_id", sql.Numeric, presupuesto_cliente_id) 
        .input("presupuesto_fecha", sql.VarChar, presupuesto_fecha) 
        .input("presupuesto_estado_id", sql.Numeric, presupuesto_estado_id) 
        .input("presupuesto_nombre_apellido", sql.VarChar, presupuesto_nombre_apellido) 
        .input("presupuesto_edad", sql.Numeric, presupuesto_edad) 
        .input("presupuesto_dni", sql.VarChar, presupuesto_dni)
        .input("presupuesto_celular", sql.VarChar, presupuesto_celular) 
        .input("presupuesto_medico_tratante", sql.VarChar, presupuesto_medico_tratante) 
        .input("presupuesto_patologias", sql.VarChar, presupuesto_patologias)
        .input("presupuesto_servicio_id", sql.Numeric, presupuesto_servicio_id) 
        .input("presupuesto_foto_uno", sql.VarBinary, presupuesto_foto_uno) 
        .input("presupuesto_foto_dos", sql.VarBinary, presupuesto_foto_dos) 
        .input("presupuesto_foto_tres", sql.VarBinary, presupuesto_foto_tres) 
        .input("presupuesto_destinatario_id", sql.Numeric, presupuesto_destinatario_id) 
        .input("presupuesto_destinatario", sql.VarChar, presupuesto_destinatario)
        .input("presupuesto_domicilio", sql.VarChar, presupuesto_domicilio) 
        .input("presupuesto_ciudad_id", sql.Numeric, presupuesto_ciudad_id) 
        .input("presupuesto_codigo_postal", sql.VarChar, presupuesto_codigo_postal)
        .input("presupuesto_provincia_id", sql.Numeric, presupuesto_provincia_id)
        .query(queries.newPresupuesto); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }  
    */
    const {
        presupuesto_cliente_id, 
        presupuesto_fecha, 
        presupuesto_destinatario, 
        presupuesto_afiliado, 
        presupuesto_asunto, 
        presupuesto_estado_id
    } = req.body;   

    console.log('NUEVO PRESUPUESTO: '+presupuesto_cliente_id+' - '+presupuesto_fecha+' - '+presupuesto_destinatario+' - '+presupuesto_afiliado+' - '+presupuesto_asunto+' - '+presupuesto_estado_id)

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("presupuesto_cliente_id", sql.Numeric, presupuesto_cliente_id) 
        .input("presupuesto_fecha", sql.VarChar, presupuesto_fecha) 
        .input("presupuesto_destinatario", sql.NVarChar, presupuesto_destinatario) 
        .input("presupuesto_afiliado", sql.NVarChar, presupuesto_afiliado) 
        .input("presupuesto_asunto", sql.NVarChar, presupuesto_asunto) 
        .input("presupuesto_estado_id", sql.Numeric, presupuesto_estado_id)
        .query(queries.newPresupuesto); 

        const id = await pool.request() 
            .query(queries.getUltimoPresupuestoId);

        const ultimoPresupuestoIdResult = await pool.request().query("SELECT MAX(CLIENTE_PRESUPUESTO_CAB_ID) AS UltimoPresupuestoId from CLIENTE_PRESUPUESTO_CAB")
        const ultimoPresupuestoId = ultimoPresupuestoIdResult.recordset[0].UltimoPresupuestoId;

        res.json({ message: "OK", PRESUPUESTO_ID: ultimoPresupuestoId });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }  
};

export const updatePresupuesto = async (req, res) => {
    const { id } = req.params;
    console.log('UPDATE')

 /*   const {
        presupuesto_cliente_id, 
        presupuesto_fecha, 
        presupuesto_estado_id, 
        presupuesto_nombre_apellido, 
        presupuesto_edad, 
        presupuesto_dni,
        presupuesto_celular,
        presupuesto_medico_tratante,
        presupuesto_patologias,
        presupuesto_servicio_id,
        presupuesto_destinatario_id,
        presupuesto_destinatario,
        presupuesto_domicilio,
        presupuesto_ciudad_id,
        presupuesto_codigo_postal,
        presupuesto_provincia_id
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input("presupuesto_cliente_id", sql.Numeric, presupuesto_cliente_id) 
        .input("presupuesto_fecha", sql.VarChar, presupuesto_fecha) 
        .input("presupuesto_estado_id", sql.Numeric, presupuesto_estado_id) 
        .input("presupuesto_nombre_apellido", sql.VarChar, presupuesto_nombre_apellido) 
        .input("presupuesto_edad", sql.Numeric, presupuesto_edad) 
        .input("presupuesto_dni", sql.VarChar, presupuesto_dni)
        .input("presupuesto_celular", sql.VarChar, presupuesto_celular) 
        .input("presupuesto_medico_tratante", sql.VarChar, presupuesto_medico_tratante) 
        .input("presupuesto_patologias", sql.VarChar, presupuesto_patologias)
        .input("presupuesto_servicio_id", sql.Numeric, presupuesto_servicio_id) 
        .input("presupuesto_destinatario_id", sql.Numeric, presupuesto_destinatario_id) 
        .input("presupuesto_destinatario", sql.VarChar, presupuesto_destinatario)
        .input("presupuesto_domicilio", sql.VarChar, presupuesto_domicilio) 
        .input("presupuesto_ciudad_id", sql.Numeric, presupuesto_ciudad_id) 
        .input("presupuesto_codigo_postal", sql.VarChar, presupuesto_codigo_postal)
        .input("presupuesto_provincia_id", sql.Numeric, presupuesto_provincia_id)
        .input('id', sql.BigInt, id)
        .query(queries.updatePresupuesto); 

        res.json({ message: "OK" });
        console.log('CORRECTO')
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    }   */
    
    const {
        presupuesto_cliente_id, 
        presupuesto_fecha, 
        presupuesto_destinatario, 
        presupuesto_afiliado, 
        presupuesto_asunto, 
        presupuesto_estado_id
    } = req.body;   

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("presupuesto_cliente_id", sql.Numeric, presupuesto_cliente_id) 
        .input("presupuesto_fecha", sql.VarChar, presupuesto_fecha) 
        .input("presupuesto_destinatario", sql.NVarChar, presupuesto_destinatario) 
        .input("presupuesto_afiliado", sql.NVarChar, presupuesto_afiliado) 
        .input("presupuesto_asunto", sql.NVarChar, presupuesto_asunto) 
        .input("presupuesto_estado_id", sql.Numeric, presupuesto_estado_id)
        .input("id", sql.BigInt, id)
        .query(queries.updatePresupuesto); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }  
};

export const deletePresupuesto = async (req, res) => {
    const { id } = req.params;

    try { 
        const pool = await getConnection();
        await pool.request()
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.deletePresupuesto); 
        
        res.status(200)
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    } 
};

export const updateImagenPresupuesto = async (req, res) => {
    const { id } = req.params;

    const {
        index,
        presupuesto_imagen 
    } = req.body;

    const buffer = Buffer.from (receta_imagen, 'base64')

    try {
        if (parseInt(index) === 0) {
            const pool = await getConnection(); 
            await pool.request() 
            .input("presupuesto_foto_uno", sql.VarBinary, buffer) 
            .input('id', sql.BigInt, id) 
            .query(queries.updatePresupuestoFotoUno); 

            res.json({ message: "OK" });
            console.log('CORRECTO')
        }
        else if (parseInt(index) === 1) {
            const pool = await getConnection(); 
            await pool.request() 
            .input("presupuesto_foto_dos", sql.VarBinary, buffer) 
            .input('id', sql.BigInt, id) 
            .query(queries.updatePresupuestoFotoDos); 

            res.json({ message: "OK" });
            console.log('CORRECTO')
        }
        else {
            const pool = await getConnection(); 
            await pool.request() 
            .input("presupuesto_foto_tres", sql.VarBinary, buffer) 
            .input('id', sql.BigInt, id) 
            .query(queries.updatePresupuestoFotoTres); 

            res.json({ message: "OK" });
            console.log('CORRECTO')
        }
    }
    catch (error){
        console.log('ERROR: '+error)
    }

}

export const getPresupuestosClienteId = async (req, res) => {
    const { id } = req.params;

    try{
        const pool = await getConnection();
        const result = await pool 
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.getPresupuestosClienteId)

        res.status(200).json(result.recordset)
    }
    catch (error) {
        console.log("ERROR: "+ error)

        res.status(500);
        res.send(error.message)
    }
}

export const getPresupuestosEstadoId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getPresupuestosEstadoId);
        
        res.status(200).json(result.recordset)
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getPresupuestosClienteEstadoId = async (req, res) => {
    const { cliente_id, estado_id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('cliente_id', cliente_id)
        .input('estado_id', estado_id)
        .query(queries.getPresupuestosClienteEstadoId);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getPresupuestoId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getPresupuestoId);
        
        res.json(result.recordset[0]);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getPresupuestoEstados = async (req, res) => { 
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getPresupuestoEstados); 
        
        res.status(200).json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 

};

export const getPresupuestoDetallePresupuestoId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getPresupuestoDetallePresupuestoId);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
}

export const getPresupuestoDetalleId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getPresupuestoDetalleId);
        
        res.json(result.recordset[0]);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
}

export const savePresupuestoDetalle = async (req, res) => {
    console.log('NUEVO detalle')
    const detalles = req.body;

    console.log('DETALLES PRESUPUESTO: '+ JSON.stringify(detalles))

    try {
        const pool = await getConnection();

        for (const detalle of detalles) {
            const {
                CLIENTE_PRESUPUESTO_DET_ID, 
                CLIENTE_PRESUPUESTO_DET_CAB_ID,
                CLIENTE_PRESUPUESTO_DET_PRODUCTO_ID,
                CLIENTE_PRESUPUESTO_DET_CANTIDAD,
                CLIENTE_PRESUPUESTO_DET_OBSERVACION,
                CLIENTE_PRESUPUESTO_DET_PRECIO_VENTA,
                CLIENTE_PRESUPUESTO_DET_PRECIO_ALQUILER,
                CLIENTE_PRESUPUESTO_DET_NOTA_UNO,
                CLIENTE_PRESUPUESTO_DET_NOTA_DOS,
                CLIENTE_PRESUPUESTO_DET_NOTA_TRES,
                CLIENTE_PRESUPUESTO_DET_PRODUCTO_MODELO,
                CLIENTE_PRESUPUESTO_DET_PRODUCTO_MARCA, 
                presupuesto_cab_id  
            } = detalle;

            if (CLIENTE_PRESUPUESTO_DET_ID && CLIENTE_PRESUPUESTO_DET_ID > 0) {
                await pool.request()
                    .input("presupuesto_cab_id", sql.Numeric, parseInt(CLIENTE_PRESUPUESTO_DET_CAB_ID))
                    .input("presupuesto_producto_id", sql.Numeric, parseInt(CLIENTE_PRESUPUESTO_DET_PRODUCTO_ID))
                    .input("presupuesto_cantidad", sql.Numeric, CLIENTE_PRESUPUESTO_DET_CANTIDAD)
                    .input("presupuesto_observacion", sql.VarChar, CLIENTE_PRESUPUESTO_DET_OBSERVACION)
                    .input("presupuesto_precio_venta", sql.Float, parseFloat(CLIENTE_PRESUPUESTO_DET_PRECIO_VENTA))
                    .input("presupuesto_precio_alquiler", sql.Float, parseFloat(CLIENTE_PRESUPUESTO_DET_PRECIO_ALQUILER))
                    .input("presupuesto_nota_uno", sql.VarChar, CLIENTE_PRESUPUESTO_DET_NOTA_UNO)
                    .input("presupuesto_nota_dos", sql.VarChar, CLIENTE_PRESUPUESTO_DET_NOTA_DOS)
                    .input("presupuesto_nota_tres", sql.VarChar, CLIENTE_PRESUPUESTO_DET_NOTA_TRES)
                    .input("presupuesto_producto_modelo", sql.VarChar, CLIENTE_PRESUPUESTO_DET_PRODUCTO_MODELO)
                    .input("presupuesto_producto_marca", sql.VarChar, CLIENTE_PRESUPUESTO_DET_PRODUCTO_MARCA)
                    .input("id", sql.Numeric, CLIENTE_PRESUPUESTO_DET_ID)
                    .query(queries.updatePresupuestoDetalle);
            }
            else {
                await pool.request()
                    .input("presupuesto_cab_id", sql.Numeric, parseInt(CLIENTE_PRESUPUESTO_DET_CAB_ID))
                    .input("presupuesto_producto_id", sql.Numeric, parseInt(CLIENTE_PRESUPUESTO_DET_PRODUCTO_ID))
                    .input("presupuesto_cantidad", sql.Numeric, CLIENTE_PRESUPUESTO_DET_CANTIDAD)
                    .input("presupuesto_observacion", sql.VarChar, CLIENTE_PRESUPUESTO_DET_OBSERVACION)
                    .input("presupuesto_precio_venta", sql.Float, parseFloat(CLIENTE_PRESUPUESTO_DET_PRECIO_VENTA))
                    .input("presupuesto_precio_alquiler", sql.Float, parseFloat(CLIENTE_PRESUPUESTO_DET_PRECIO_ALQUILER))
                    .input("presupuesto_nota_uno", sql.VarChar, CLIENTE_PRESUPUESTO_DET_NOTA_UNO)
                    .input("presupuesto_nota_dos", sql.VarChar, CLIENTE_PRESUPUESTO_DET_NOTA_DOS)
                    .input("presupuesto_nota_tres", sql.VarChar, CLIENTE_PRESUPUESTO_DET_NOTA_TRES)
                    .input("presupuesto_producto_modelo", sql.VarChar, CLIENTE_PRESUPUESTO_DET_PRODUCTO_MODELO)
                    .input("presupuesto_producto_marca", sql.VarChar, CLIENTE_PRESUPUESTO_DET_PRODUCTO_MARCA)
                    .query(queries.newPresupuestoDetalle);
            }
        }

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }  
}

export const newPresupuestoDetalle = async (req, res) => {
    console.log('NUEVO')
    const detalles = req.body.detalles;

    try {
        const pool = await getConnection();

        for (const detalle of detalles) {
            const {
                presupuesto_cab_id,
                presupuesto_producto_id,
                presupuesto_cantidad,
                presupuesto_observacion,
                presupuesto_precio_venta,
                presupuesto_precio_alquiler,
                presupuesto_nota_uno,
                presupuesto_nota_dos,
                presupuesto_nota_tres,
                presupuesto_producto_modelo,
                presupuesto_producto_marca
            } = detalle;

            await pool.request()
                .input("presupuesto_cliente_id", sql.Numeric, presupuesto_cab_id)
                .input("presupuesto_producto_id", sql.Numeric, presupuesto_producto_id)
                .input("presupuesto_cantidad", sql.Numeric, presupuesto_cantidad)
                .input("presupuesto_observacion", sql.VarChar, presupuesto_observacion)
                .input("presupuesto_precio_venta", sql.Numeric, presupuesto_precio_venta)
                .input("presupuesto_precio_alquiler", sql.Numeric, presupuesto_precio_alquiler)
                .input("presupuesto_nota_uno", sql.VarChar, presupuesto_nota_uno)
                .input("presupuesto_nota_dos", sql.VarChar, presupuesto_nota_dos)
                .input("presupuesto_nota_tres", sql.VarChar, presupuesto_nota_tres)
                .input("presupuesto_producto_modelo", sql.VarChar, presupuesto_producto_modelo)
                .input("presupuesto_producto_marca", sql.VarChar, presupuesto_producto_marca)
                .query(queries.newPresupuestoDetalle);
        }

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }     
};

export const updatePresupuestoDetalle = async (req, res) => {
    console.log('UPDATE')
    const { id } = req.params;
    const detalles = req.body.detalles;
    
    try {
        const pool = await getConnection();

        for (const detalle of detalles) {
            const {
                presupuesto_cab_id, 
                presupuesto_producto_id, 
                presupuesto_cantidad, 
                presupuesto_observacion, 
                presupuesto_precio_venta, 
                presupuesto_precio_alquiler, 
                presupuesto_nota_uno, 
                presupuesto_nota_dos, 
                presupuesto_nota_tres,
                presupuesto_producto_modelo, 
                presupuesto_producto_marca 
            } = detalle;

            await pool.request()
                .input("presupuesto_cliente_id", sql.Numeric, presupuesto_cab_id)
                .input("presupuesto_producto_id", sql.Numeric, presupuesto_producto_id)
                .input("presupuesto_cantidad", sql.Numeric, presupuesto_cantidad)
                .input("presupuesto_observacion", sql.VarChar, presupuesto_observacion)
                .input("presupuesto_precio_venta", sql.Numeric, presupuesto_precio_venta)
                .input("presupuesto_precio_alquiler", sql.Numeric, presupuesto_precio_alquiler)
                .input("presupuesto_nota_uno", sql.VarChar, presupuesto_nota_uno)
                .input("presupuesto_nota_dos", sql.VarChar, presupuesto_nota_dos)
                .input("presupuesto_nota_tres", sql.VarChar, presupuesto_nota_tres)
                .input("presupuesto_producto_modelo", sql.VarChar, presupuesto_producto_modelo)
                .input("presupuesto_producto_marca", sql.VarChar, presupuesto_producto_marca)
                .input("id", sql.BigInt, id)
                .query(queries.updatePresupuestoDetalle);
        }

        res.json({ message: "OK" });
    }
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }   
}

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

/////////////////////////////////////////////////////////////////////////////////////////

export const newPresupuestoServicio = async (req, res) => {

    const {
        presupuesto_servicio_descripcion
    } = req.body;   

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("presupuesto_servicio_descripcion", sql.NVarChar, presupuesto_servicio_descripcion) 
        .query(queries.newPresupuestoServicio); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }  
};

export const updatePresupuestoServicio = async (req, res) => {
    const { id } = req.params;

    const {
        presupuesto_servicio_descripcion
    } = req.body;   

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("presupuesto_servicio_descripcion", sql.NVarChar, presupuesto_servicio_descripcion) 
        .input("id", sql.BigInt, id)
        .query(queries.updatePresupuestoServicio); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }  
};

export const getPresupuestoServicios = async (req, res) => { 
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getPresupuestoServicios); 
        
        res.status(200).json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 

};

///////////////////////////////////////////////////////////////////////////////

export const newPresupuestoDestinatario = async (req, res) => {

    const {
        presupuesto_destinatario_descripcion
    } = req.body;   

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("presupuesto_destinatario_descripcion", sql.NVarChar, presupuesto_destinatario_descripcion) 
        .query(queries.newPresupuestoDestinatario); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }  
};

export const updatePresupuestoDestinatario = async (req, res) => {
    const { id } = req.params;

    const {
        presupuesto_destinatario_descripcion
    } = req.body;   

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("presupuesto_destinatario_descripcion", sql.NVarChar, presupuesto_destinatario_descripcion) 
        .input("id", sql.BigInt, id)
        .query(queries.updatePresupuestoDestinatario); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }  
};

export const getPresupuestoDestinatarios = async (req, res) => { 
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getPresupuestoDestinatarios); 
        
        res.status(200).json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 

};