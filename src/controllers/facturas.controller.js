import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";

export const newFactura = async (req, res) => {
    const {
        factura_descripcion, 
	    factura_fecha, 
	    factura_filename, 
	    factura_codigo_bas, 
	    factura_extension, 
	    factura_estado_id 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("factura_descripcion", sql.VarChar, factura_descripcion) 
        .input("factura_fecha", sql.VarChar, factura_fecha) 
        .input("factura_filename", sql.VarChar, factura_filename) 
        .input("factura_codigo_bas", sql.VarChar, factura_codigo_bas) 
        .input("factura_extension", sql.VarChar, factura_extension)         
        .input("factura_estado_id", sql.Numeric, factura_estado_id) 
        .query(queries.newFactura); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }    
}

export const updateFactura = async (req, res) => {
    const { id } = req.params;
    
    const {
        factura_descripcion, 
	    factura_fecha, 
	    factura_filename, 
	    factura_codigo_bas, 
	    factura_extension, 
	    factura_estado_id 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input('id', sql.BigInt, id) 
        .input("factura_descripcion", sql.VarChar, factura_descripcion) 
        .input("factura_fecha", sql.VarChar, factura_fecha) 
        .input("factura_filename", sql.VarChar, factura_filename) 
        .input("factura_codigo_bas", sql.VarChar, factura_codigo_bas) 
        .input("factura_extension", sql.VarChar, factura_extension)         
        .input("factura_estado_id", sql.Numeric, factura_estado_id) 
        .query(queries.updateFactura); 

        res.json({ message: "OK" });
        console.log('CORRECTO')
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO')
    }   
}

export const getFacturas = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getFacturas);

        res.status(200).json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};

export const getFacturasEstadoId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.getFacturasEstadoId); 

        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};

export const newFacturaProductoAsignado = async (req, res) => {
    const {
        producto_factura_producto_id, 
        producto_factura_cliente_id, 
        producto_factura_factura_id 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("producto_factura_producto_id", sql.Numeric, producto_factura_producto_id) 
        .input("producto_factura_cliente_id", sql.Numeric, producto_factura_cliente_id) 
        .input("producto_factura_factura_id", sql.Numeric, producto_factura_factura_id) 
        .query(queries.newFacturaProductoAsignado); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }    
}

export const deleteFacturaProductoAsignado = async (req, res) => {
    const { id } = req.params;
    
    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input('id', sql.BigInt, id) 
        .query(queries.deleteFacturaProductoAsignado); 

        res.json({ message: "OK" });
        console.log('CORRECTO')
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO')
    }   
}

export const getFacturasProductoAsignadoId = async (req, res) => {
    const { id } = req.params;
    
    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input('id', sql.BigInt, id) 
        .query(queries.getFacturasProductoAsignadoId); 

        res.status(200).json(result.recordset);
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO')
    }   
}

export const getFacturaEstados = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getFacturaEstados);

        res.status(200).json(result.recordset);
    } catch (error) {
        console.log("ERROR");
        res.status(500);
        res.send(error.message);
    }
};

export const saveFactura = async (req, res) => {
    console.log('FILE: '+JSON.stringify(req.file))
    console.log('BODY: '+JSON.stringify(req.body))

    try {
        // Verifica si se ha cargado correctamente el archivo
/*        if (!req.file) {
            // Si no se ha cargado correctamente el archivo, envía un mensaje de error
            return res.status(400).send('Error: No se ha cargado ningún archivo.');
        }
*/
        // Obtiene los datos del cuerpo de la solicitud
        const { 
            factura_id, 
            factura_descripcion, 
            factura_fecha, 
            factura_filename, 
            factura_codigo_bas, 
            factura_extension, 
            factura_estado_id
        } = req.body;

        try { 
            const filePath = req.file.filename
            console.log('FILE PATH: '+filePath)
            
            if (factura_id && factura_id > 0) { 
                // update 

            }
            else {
                // new
                const pool = await getConnection(); 
                await pool.request() 
                    .input("factura_descripcion", sql.VarChar, factura_descripcion === "null" ? null : factura_descripcion) 
                    .input("factura_fecha", sql.VarChar, factura_fecha === "null" ? null : factura_fecha) 
                    .input("factura_filename", sql.VarChar, filePath === "null" ? null : filePath) 
                    .input("factura_codigo_bas", sql.NVarChar, factura_codigo_bas === "null" ? null : factura_codigo_bas) 
                    .input("factura_extension", sql.VarChar, factura_extension === "null" ? null : factura_extension) 
                    .input("factura_estado_id", sql.Numeric, parseInt(factura_estado_id)) 
                    .query(queries.newFactura); 
            }

            console.log('FINALIZO CORRECTO...')
            res.json({ message: "OK" });
        } catch (error) {
            // Si ocurre un error, envía un mensaje de error
            console.error('Error al guardar producto asignado:', error);
            res.status(500).send('Error interno del servidor.');
        }
    } catch (error) {
        // Si ocurre un error, envía un mensaje de error
        console.error('Error al guardar los datos:', error);
        res.status(500).send('Error interno del servidor.');
    }
}