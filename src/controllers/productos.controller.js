import { directorioFacturas } from '../app.js';
import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";
import { Buffer } from 'buffer';


export const newProducto = async (req, res) => {
    console.log('NUEVO')
    const {
        producto_codigo, 
        producto_serie, 
        producto_bas, 
        producto_descripcion, 
        producto_modelo, 
        producto_marca_id, 
        producto_categoria_id, 
        producto_proveedor_id, 
        producto_precio, 
        producto_producto_tipo_id, 
        producto_ultima_fecha, 
        producto_condicion_id, 
        producto_tipo_moneda_id, 
        producto_servicio_id, 
        producto_activo,
        producto_descripcion_larga, 
    } = req.body;

    console.log('PRODUCTO Codigo: '+producto_codigo)
    console.log('PRODUCTO Serie: '+producto_serie)
    console.log('PRODUCTO Bas: '+producto_bas)
    console.log('PRODUCTO Desc: '+producto_descripcion)
    console.log('PRODUCTO Modelo: '+producto_modelo)
    console.log('PRODUCTO Marca: '+producto_marca_id)
    console.log('PRODUCTO Categoria: '+producto_categoria_id)
    console.log('PRODUCTO proveedor: '+producto_proveedor_id)
    console.log('PRODUCTO precio: '+producto_precio)
    console.log('PRODUCTO Tipo: '+producto_producto_tipo_id)
    console.log('PRODUCTO Fecha: '+producto_ultima_fecha)
    console.log('PRODUCTO Condicion: '+producto_condicion_id)
    console.log('PRODUCTO Moneda: '+producto_tipo_moneda_id)
    console.log('PRODUCTO Servicio: '+producto_servicio_id)
    console.log('PRODUCTO Activo: '+producto_activo)
    console.log('PRODUCTO Desc larga: '+producto_descripcion_larga)

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("producto_codigo", sql.VarChar, producto_codigo) 
        .input("producto_serie", sql.VarChar, producto_serie) 
        .input("producto_bas", sql.VarChar, producto_bas) 
        .input("producto_descripcion", sql.VarChar, producto_descripcion) 
        .input("producto_modelo", sql.VarChar, producto_modelo) 
        .input("producto_marca_id", sql.Numeric, producto_marca_id) 
        .input("producto_categoria_id", sql.Numeric, producto_categoria_id) 
        .input("producto_proveedor_id", sql.Numeric, producto_proveedor_id) 
        .input("producto_precio", sql.Decimal, producto_precio) 
        .input("producto_producto_tipo_id", sql.Numeric, producto_producto_tipo_id) 
        .input("producto_ultima_fecha", sql.VarChar, producto_ultima_fecha) 
        .input("producto_condicion_id", sql.Numeric, producto_condicion_id) 
        .input("producto_tipo_moneda_id", sql.Numeric, producto_tipo_moneda_id)
        .input("producto_servicio_id", sql.Numeric, producto_servicio_id) 
        .input("producto_activo", sql.Numeric, producto_activo) 
        .input("producto_descripcion_larga", sql.VarChar, producto_descripcion_larga)
        .query(queries.newProducto); 

        const ultimoProductoIdResult = await pool.request().query("SELECT MAX(PRODUCTO_ID) AS UltimoProductoId from PRODUCTO")
        const ultimoProductoId = ultimoProductoIdResult.recordset[0].UltimoProductoId;

        res.json({ message: "OK", ultimoProducto: ultimoProductoId });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }     
};

export const updateImagenProducto = async (req, res) => {
    const { id } = req.params;

    const {
        index,
        producto_imagen 
    } = req.body;

    console.log('IMAGEN GUARDAR: '+producto_imagen)

    const buffer = Buffer.from (producto_imagen, 'base64')

    try {
        if (parseInt(index) === 0) {
            const pool = await getConnection(); 
            await pool.request() 
            .input("producto_imagen_uno", sql.VarBinary, buffer) 
            .input('id', sql.BigInt, id) 
            .query(queries.updateImagenUnoProducto); 

            res.json({ message: "OK" });
            console.log('CORRECTO')
        }
        else if (parseInt(index) === 1) {
            const pool = await getConnection(); 
            await pool.request() 
            .input("producto_imagen_dos", sql.VarBinary, buffer) 
            .input('id', sql.BigInt, id) 
            .query(queries.updateImagenDosProducto); 

            res.json({ message: "OK" });
            console.log('CORRECTO')
        }
        else if (parseInt(index) === 2) {
            const pool = await getConnection(); 
            await pool.request() 
            .input("producto_imagen_tres", sql.VarBinary, buffer) 
            .input('id', sql.BigInt, id) 
            .query(queries.updateImagenTresProducto); 

            res.json({ message: "OK" });
            console.log('CORRECTO')
        }
        else {
            const pool = await getConnection(); 
            await pool.request() 
            .input("producto_imagen_cuatro", sql.VarBinary, buffer) 
            .input('id', sql.BigInt, id) 
            .query(queries.updateImagenCuatroProducto); 

            res.json({ message: "OK" });
            console.log('CORRECTO')
        }
    }
    catch (error){
        console.log('ERROR: '+error)
    }

}

export const updateProducto = async (req, res) => {
    const { id } = req.params;   

    console.log('UPDATE')

    const {
        producto_codigo,
        producto_serie,
        producto_bas,
        producto_descripcion,
        producto_modelo,
        producto_marca_id,
        producto_categoria_id,
        producto_proveedor_id,
        producto_precio,
        producto_producto_tipo_id,
        producto_ultima_fecha,
        producto_condicion_id,
        producto_tipo_moneda_id,
        producto_servicio_id,
        producto_activo, 
        producto_descripcion_larga
    } = req.body;

    console.log('DB DESC. LARGA: '+producto_descripcion_larga)

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("producto_codigo", sql.VarChar, producto_codigo) 
        .input("producto_serie", sql.VarChar, producto_serie) 
        .input("producto_bas", sql.VarChar, producto_bas) 
        .input("producto_descripcion", sql.VarChar, producto_descripcion) 
        .input("producto_modelo", sql.VarChar, producto_modelo) 
        .input("producto_marca_id", sql.Numeric, producto_marca_id) 
        .input("producto_categoria_id", sql.Numeric, producto_categoria_id) 
        .input("producto_proveedor_id", sql.Numeric, producto_proveedor_id) 
        .input("producto_precio", sql.Decimal, producto_precio) 
        .input("producto_producto_tipo_id", sql.Numeric, producto_producto_tipo_id) 
        .input("producto_ultima_fecha", sql.VarChar, producto_ultima_fecha) 
        .input("producto_condicion_id", sql.Numeric, producto_condicion_id) 
        .input("producto_tipo_moneda_id", sql.Numeric, producto_tipo_moneda_id) 
        .input("producto_servicio_id", sql.Numeric, producto_servicio_id) 
        .input("producto_activo", sql.Numeric, producto_activo) 
        .input("producto_descripcion_larga", sql.VarChar, producto_descripcion_larga)
        .input('id', sql.BigInt, id) 
        .query(queries.updateProducto); 

        res.json({ message: "OK" });
        console.log('CORRECTO')
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    }     
};

export const deleteProducto = async (req, res) => {
    const { id } = req.params;

    try { 
        const pool = await getConnection();
        await pool.request()
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.deleteProducto); 
        
        res.status(200)
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    } 
};

export const activarProducto = async (req, res) => {
    const { id } = req.params;

    const { producto_activo, 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input('id', sql.BigInt, id) 
        .input("producto_activo", sql.Decimal, producto_activo) 
        .query(queries.updateProducto); 

        res.status(200)
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }     
};

export const getProductoId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getProductoId);
        
        res.json(result.recordset[0]);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getProductosCategoriaId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getProductosCategoriaId);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getProductosProveedorId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getProductosProveedorId);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getProductosRubroId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getProductosRubroId);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getProductos = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getProductos);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getProductosCard = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getProductosCard);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getProductosCategoriaIdCard = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getProductosCategoriaIdCard);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
}

export const getProductosEquipos = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getProductosEquipos);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getProductosConsumibles = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getProductosConsumibles);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getUltimoProductoId = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getUltimoProductoId);
        
        res.json(result.recordset[0]);
    }
    catch (error) {
        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
}

///////////////////////////////////////////////////////////////////////////

export const getProductosEquiposClienteId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getProductosEquiposClienteId)

        res.json(result.recordset);
    }
    catch (error) {
        console.log ("ERROR");
        
        res.status(500);
        res.send(error.message);
    }
}

export const getProductoEquipoDetalleClienteId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getProductoEquipoDetalleClienteId)

        console.log('DETALLE: '+JSON.stringify(result.recordset[0]))

        res.json(result.recordset[0]);
    }
    catch (error) {
        console.log ("ERROR");
        
        res.status(500);
        res.send(error.message);
    }
}


export const getProductosConsumiblesClienteId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getProductosConsumiblesClienteId)

        res.json(result.recordset);
    }
    catch (error) {
        console.log ("ERROR");
        
        res.status(500);
        res.send(error.message);
    }
}

export const getProductoConsumibleDetalleClienteId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getProductoConsumibleDetalleClienteId)

        res.json(result.recordset);
    }
    catch (error) {
        console.log ("ERROR");
        
        res.status(500);
        res.send(error.message);
    }
}

export const getProductoEquipoHistorialId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getProductoEquipoHistorialId)

        res.json(result.recordset);
    }
    catch (error) {
        console.log ("ERROR");

        res.status(500);
        res.send(error.message)
    }
}

///////////////////////////////////////////////////////////////////////////////////

export const newProductoEquipoAsignar = async (req, res) => {
    console.log('NUEVO')
    
    const {
        producto_asignado_ciente_id, 
        producto_asignado_producto_id, 
        producto_asignado_fecha_alta, 
        producto_asignado_observacion, 
        producto_asignado_importe, 
        producto_asignado_service, 
        producto_asignado_recomendaciones, 
        producto_asignado_fecha_baja, 
        producto_asignado_factura, 
        producto_asignado_factura_tipo
    } = req.body; 

    try { 
        const pool = await getConnection(); 
        await pool.request() 
            .input("producto_asignado_ciente_id", sql.Numeric, producto_asignado_ciente_id) 
            .input("producto_asignado_producto_id", sql.Numeric, producto_asignado_producto_id) 
            .input("producto_asignado_fecha_alta", sql.VarChar, producto_asignado_fecha_alta) 
            .input("producto_asignado_observacion", sql.VarChar, producto_asignado_observacion) 
            .input("producto_asignado_importe", sql.Float, producto_asignado_importe) 
            .input("producto_asignado_service", sql.VarChar, producto_asignado_service) 
            .input("producto_asignado_recomendaciones", sql.VarChar, producto_asignado_recomendaciones) 
            .input("producto_asignado_fecha_baja", sql.VarChar, producto_asignado_fecha_baja)   
            .input("producto_asignado_factura", sql.NVarChar, producto_asignado_factura)   
            .input("producto_asignado_factura_tipo", sql.VarChar, producto_asignado_factura_tipo)
            .query(queries.newProductoEquipoAsignar); 

        // obtener planes del producto que se asigno : PRODUCTO_ID 
        const resultPlanes = await pool.request() 
            .input("id", sql.Numeric, producto_asignado_producto_id) 
            .query(queries.getPlanesMantenimientoProductoId) 

        if (resultPlanes.recordset.length > 0) {
            for (let i = 0; i < resultPlanes.recordset.length; i++) {
                let planId = resultPlanes.recordset[i].PLAN_MANTENIMIENTO_ID;
        
                await pool.request()
                    .input("plan_historial_producto_id", sql.Numeric, producto_asignado_producto_id)
                    .input("plan_historial_cliente_id", sql.Numeric, producto_asignado_ciente_id)
                    .input("plan_historial_plan_id", sql.Numeric, parseInt(planId))
                    .input("plan_historial_fecha", sql.VarChar, null)
                    .input("plan_historial_observacion", sql.NVarChar, '')
                    .query(queries.newPlanMantenimientoHistorial);

                const resultUltimoHistorial = await pool.request().query("SELECT COALESCE(MAX(PLAN_MANTENIMIENTO_HISTORIAL_ID), 0) + 1 AS UltimoPlanId from PLAN_MANTENIMIENTO_HISTORIAL") 
                const ultimoHistorialId = resultUltimoHistorial.recordset[0].UltimoPlanId; 
    
                const resultTrabajos = await pool.request()
                    .input("id", sql.Numeric, planId)
                    .query(queries.getTrabajosPlanMantenimiento)

                if (resultTrabajos.recordset.length > 0) {
                    for (let j = 0; j < resultTrabajos.recordset.length; j++) {
                        let trabajoId = resultTrabajos.recordset[j].PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID;

                        await pool.request()
                            .input("plan_mantenimiento_historial_id", sql.Numeric, ultimoHistorialId)
                            .input("plan_mantenimiento_trabajo_id", sql.Numeric, trabajoId)
                            .input("plan_mantenimiento_estado", sql.Bit, 0)
                            .input("plan_mantenimiento_fecha", sql.VarChar, null)
                            .query(queries.newPlanMantenimientoHistorialDetalle);
                    }
                }
            }
        }

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }     
};

export const updateProductoEquipoAsignar = async (req, res) => {
    const { id } = req.params;
    console.log('UPDATE')

    const {
        producto_asignado_ciente_id,
        producto_asignado_producto_id, 
        producto_asignado_fecha_alta, 
        producto_asignado_observacion, 
        producto_asignado_importe, 
        producto_asignado_service, 
        producto_asignado_recomendaciones, 
        producto_asignado_fecha_baja, 
        producto_asignado_factura, 
        producto_asignado_factura_tipo 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input("producto_asignado_ciente_id", sql.Numeric, producto_asignado_ciente_id) 
        .input("producto_asignado_producto_id", sql.Numeric, producto_asignado_producto_id) 
        .input("producto_asignado_fecha_alta", sql.VarChar, producto_asignado_fecha_alta) 
        .input("producto_asignado_observacion", sql.VarChar, producto_asignado_observacion) 
        .input("producto_asignado_importe", sql.Float, producto_asignado_importe) 
        .input("producto_asignado_service", sql.VarChar, producto_asignado_service) 
        .input("producto_asignado_recomendaciones", sql.VarChar, producto_asignado_recomendaciones) 
        .input("producto_asignado_fecha_baja", sql.VarChar, producto_asignado_fecha_baja) 
        .input("producto_asignado_factura", sql.NVarChar, producto_asignado_factura) 
        .input("producto_asignado_factura_tipo", sql.VarChar, producto_asignado_factura_tipo) 
        .input('id', sql.BigInt, id)
        .query(queries.updateProductoEquipoAsignar); 

        res.json({ message: "OK" });
        console.log('CORRECTO')
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    } 
};

export const deleteProductoEquipoAsignar = async (req, res) => {
    const { id } = req.params;

    try { 
        const pool = await getConnection();
        await pool.request()
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.deleteProductoEquipoAsignar); 
        
        res.status(200)
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    } 
};

export const sincronizarProductosEquipo = async (req, res) => {
    const {  } = req.params;



}

/////////////////////////////////////////////////////////////////////

export const getCaracteristicasProductoId = async (req, res) => {
    const { id } = req.params;

    try { 
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getCaracteristicasProductoId)
        
        res.json(result.recordset);
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }
}

export const newCaracteristicaProducto = async (req, res) => {
    console.log('NUEVO')
    
    const {
        caracteristica_producto_id,
        caracteristica_descripcion, 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("caracteristica_producto_id", sql.Numeric, caracteristica_producto_id) 
        .input("caracteristica_descripcion", sql.VarChar, caracteristica_descripcion) 
        .query(queries.newCaracteristicaProducto); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }     
};
 
export const updateCaracteristicaProductoId = async (req, res) => {
    const { id } = req.params;
    console.log('UPDATE')

    const {
        caracteristica_descripcion
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input("caracteristica_descripcion", sql.VarChar, caracteristica_descripcion) 
        .input('id', sql.BigInt, id)
        .query(queries.updateCaracteristicaProductoId); 

        res.json({ message: "OK" });
        console.log('CORRECTO')
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    } 
};

export const deleteCaracteristicaProductoId = async (req, res) => {
    const { id } = req.params;

    try { 
        const pool = await getConnection();
        await pool.request()
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.deleteCaracteristicaProductoId); 
        
        res.status(200).json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    } 
};

//const multer = require('multer');
//const upload = multer({ dest: 'archivos_app/' });

const path = require('path');
const fs = require('fs');
/*
export const saveProductoEquipoAsignar = async (req, res) => {
    let correcto = true
    //const productoAsignado = req.body;
    
    const producto_asignado_ciente_id = req.body.producto_asignado_ciente_id
    const producto_asignado_producto_id = req.body.producto_asignado_producto_id
    const producto_asignado_fecha_alta = req.body.producto_asignado_fecha_alta
    const producto_asignado_observacion = req.body.producto_asignado_observacion
    const producto_asignado_importe = req.body.producto_asignado_importe
    const producto_asignado_service = req.body.producto_asignado_service 
    const producto_asignado_recomendaciones  = req.body.producto_asignado_recomendaciones
    const producto_asignado_fecha_baja = req.body.producto_asignado_fecha_baja
    const producto_asignado_factura = req.body.producto_asignado_factura
    const producto_asignado_factura_tipo = req.body.producto_asignado_factura_tipo 
    
    // Obtener datos del archivo
    const file = req.file;
    console.log('FILE PARAM: '+file)
    const filePath = file.path; // Ruta temporal del archivo
    const originalFileName = file.originalname; 

    console.log('DATOS: '+producto_asignado_ciente_id+' - '+producto_asignado_producto_id+' - '+producto_asignado_fecha_alta+' - '+producto_asignado_factura)
    console.log('FILE: '+file)
/*
    const {
        producto_asignado_ciente_id, 
        producto_asignado_producto_id, 
        producto_asignado_fecha_alta, 
        producto_asignado_observacion, 
        producto_asignado_importe, 
        producto_asignado_service, 
        producto_asignado_recomendaciones, 
        producto_asignado_fecha_baja, 
        producto_asignado_factura, 
        producto_asignado_factura_tipo
    } = productoAsignado; 
*/
/*
    try { 
        const pool = await getConnection(); 
        await pool.request() 
            .input("producto_asignado_ciente_id", sql.Numeric, producto_asignado_ciente_id) 
            .input("producto_asignado_producto_id", sql.Numeric, producto_asignado_producto_id) 
            .input("producto_asignado_fecha_alta", sql.VarChar, producto_asignado_fecha_alta) 
            .input("producto_asignado_observacion", sql.VarChar, producto_asignado_observacion) 
            .input("producto_asignado_importe", sql.Float, producto_asignado_importe) 
            .input("producto_asignado_service", sql.VarChar, producto_asignado_service) 
            .input("producto_asignado_recomendaciones", sql.VarChar, producto_asignado_recomendaciones) 
            .input("producto_asignado_fecha_baja", sql.VarChar, producto_asignado_fecha_baja)   
            .input("producto_asignado_factura", sql.NVarChar, producto_asignado_factura)   
            .input("producto_asignado_factura_tipo", sql.VarChar, producto_asignado_factura_tipo)
            .query(queries.newProductoEquipoAsignar); 

        const resultUltimaAsignacion = await pool.request().query("SELECT COALESCE(MAX(PRODUCTO_ASIGNADO_ID), 0) + 1 AS UltimaAsignacionId from PRODUCTO_ASIGNADO") 
        const ultimaAsignacionId = resultUltimaAsignacion.recordset[0].UltimaAsignacionId; 
        
/*        const file = req.file;

        // Aquí construyes el path al archivo guardado en el servidor
        const filePath = path.join(__dirname, '..', 'facturas_app', file.filename);

        // Lee el archivo temporal y guárdalo en el servidor
        fs.readFile(file.path, (err, data) => {
            if (err) { 
                correcto = false
                throw err;
            }

            // Escribe los datos en el nuevo archivo
            fs.writeFile(filePath, data, (err) => {
                if (err) { 
                    correcto = false
                    throw err;
                }
                console.log('El archivo se ha guardado correctamente en el servidor.'); 
                correcto = true
            });
        });
*/  
/*
        const file = req.file;
        console.log('FILE erq: '+file)
        // Ruta temporal del archivo
        const tempFilePath = file.path;

        // Nombre original del archivo
        const originalFileName = file.originalname;

        // Directorio donde se guardarán los archivos
        const uploadDir = 'facturas_app/';

        // Ruta donde se guardará el archivo en el servidor
        const filePath = `${uploadDir}${originalFileName}`;

        // Lee el archivo temporal y guárdalo en el servidor
        fs.readFile(tempFilePath, (err, data) => {
            if (err) { 
                correcto = false
                throw err;
            }

            // Escribe los datos en el nuevo archivo
            fs.writeFile(filePath, data, (err) => {
                if (err) { 
                    correcto = false
                    throw err;
                }
                correcto = true
                console.log('El archivo se ha guardado correctamente en el servidor.');
                
                // Resto del código para guardar los datos en la base de datos...
            });
        });
        //actualizo correcto
        if (correcto) {
            // actualizar path factura en producto_asignado 
            await pool.request() 
                .input("producto_asignado_factura", sql.NVarChar, filePath)   
                .input("id", sql.Numeric, ultimaAsignacionId)
                .query(queries.updateProductoEquipoAsignarFactura); 
            console.log('ACTUALIZO PATH FACTURA CORRECTO')
        }

        const resultPlanes = await pool.request() 
            .input("id", sql.Numeric, producto_asignado_producto_id) 
            .query(queries.getPlanesMantenimientoProductoId) 

        if (resultPlanes.recordset.length > 0) {
            for (let i = 0; i < resultPlanes.recordset.length; i++) {
                let planId = resultPlanes.recordset[i].PLAN_MANTENIMIENTO_ID;
        
                await pool.request()
                    .input("plan_historial_producto_id", sql.Numeric, producto_asignado_producto_id)
                    .input("plan_historial_cliente_id", sql.Numeric, producto_asignado_ciente_id)
                    .input("plan_historial_plan_id", sql.Numeric, parseInt(planId))
                    .input("plan_historial_fecha", sql.VarChar, null)
                    .input("plan_historial_observacion", sql.NVarChar, '')
                    .query(queries.newPlanMantenimientoHistorial);

                const resultUltimoHistorial = await pool.request().query("SELECT COALESCE(MAX(PLAN_MANTENIMIENTO_HISTORIAL_ID), 0) + 1 AS UltimoPlanId from PLAN_MANTENIMIENTO_HISTORIAL") 
                const ultimoHistorialId = resultUltimoHistorial.recordset[0].UltimoPlanId;         
    
                const resultTrabajos = await pool.request()
                    .input("id", sql.Numeric, planId)
                    .query(queries.getTrabajosPlanMantenimiento)

                if (resultTrabajos.recordset.length > 0) {
                    for (let j = 0; j < resultTrabajos.recordset.length; j++) {
                        let trabajoId = resultTrabajos.recordset[j].PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID;

                        await pool.request()
                            .input("plan_mantenimiento_historial_id", sql.Numeric, ultimoHistorialId)
                            .input("plan_mantenimiento_trabajo_id", sql.Numeric, trabajoId)
                            .input("plan_mantenimiento_estado", sql.Bit, 0)
                            .input("plan_mantenimiento_fecha", sql.VarChar, null)
                            .query(queries.newPlanMantenimientoHistorialDetalle);
                    }
                }
            }
        }

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }  
};
*/

export const saveProductoEquipoAsignar = async (req, res) => {
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
            producto_asignado_id, 
            producto_asignado_ciente_id, 
            producto_asignado_producto_id, 
            producto_asignado_fecha_alta, 
            producto_asignado_observacion, 
            producto_asignado_importe, 
            producto_asignado_service, 
            producto_asignado_recomendaciones, 
            producto_asignado_fecha_baja, 
            producto_asignado_factura, 
            producto_asignado_factura_tipo 
        } = req.body;

        try { 
            if (producto_asignado_id && producto_asignado_id > 0) { 
                // update 

            }
            else {
                // new
                const pool = await getConnection(); 
                await pool.request() 
                    .input("producto_asignado_ciente_id", sql.Numeric, parseInt(producto_asignado_ciente_id))  
                    .input("producto_asignado_producto_id", sql.Numeric, parseInt(producto_asignado_producto_id)) 
                    .input("producto_asignado_fecha_alta", sql.VarChar, producto_asignado_fecha_alta === "null" ? null : producto_asignado_fecha_alta) 
                    .input("producto_asignado_observacion", sql.VarChar, producto_asignado_observacion === "null" ? null : producto_asignado_observacion) 
                    .input("producto_asignado_importe", sql.Float, parseFloat(producto_asignado_importe)) 
                    .input("producto_asignado_service", sql.VarChar, producto_asignado_service === "null" ? null : producto_asignado_service) 
                    .input("producto_asignado_recomendaciones", sql.VarChar, producto_asignado_recomendaciones === "null" ? null : producto_asignado_recomendaciones) 
                    .input("producto_asignado_fecha_baja", sql.VarChar, producto_asignado_fecha_baja === "null" ? null : producto_asignado_fecha_baja) 
                    .input("producto_asignado_factura", sql.NVarChar, producto_asignado_factura === "null" ? null : producto_asignado_factura) 
                    .input("producto_asignado_factura_tipo", sql.VarChar, producto_asignado_factura_tipo === "null" ? null : producto_asignado_factura_tipo)
                    .query(queries.newProductoEquipoAsignar); 

                const resultUltimaAsignacion = await pool.request().query("SELECT COALESCE(MAX(PRODUCTO_ASIGNADO_ID), 1) AS UltimaAsignacionId from PRODUCTO_ASIGNADO") 
                const ultimaAsignacionId = resultUltimaAsignacion.recordset[0].UltimaAsignacionId; 

                //const filePath = req.file.path;

                //console.log('ULTIMO ASIGNADO: '+ultimaAsignacionId)
                //console.log('FILE PATH: '+filePath)

                //const filePath = directorioFacturas+'//'+req.file.filename
                const filePath = req.file.filename
                console.log('FILE PATH: '+filePath)

                await pool.request() 
                    .input("producto_asignado_factura", sql.NVarChar, filePath) 
                    .input("id", sql.Numeric, ultimaAsignacionId)
                    .query(queries.updateProductoEquipoAsignarFactura);

                console.log('ACTUALIZO PARH')

                const resultPlanes = await pool.request() 
                    .input("id", sql.Numeric, producto_asignado_producto_id) 
                    .query(queries.getPlanesMantenimientoProductoId) 
                console.log('PLANES PRODUCTO: '+resultPlanes.recordset.length)
                if (resultPlanes.recordset.length > 0) {
                    for (let i = 0; i < resultPlanes.recordset.length; i++) {
                        let planId = resultPlanes.recordset[i].PLAN_MANTENIMIENTO_ID;

                        await pool.request()
                            .input("plan_historial_producto_id", sql.Numeric, ultimaAsignacionId)
                            .input("plan_historial_cliente_id", sql.Numeric, producto_asignado_ciente_id)
                            .input("plan_historial_plan_id", sql.Numeric, parseInt(planId))
                            .input("plan_historial_fecha", sql.VarChar, null)
                            .input("plan_historial_observacion", sql.NVarChar, '')
                            .query(queries.newPlanMantenimientoHistorial);

                        const resultUltimoHistorial = await pool.request().query("SELECT COALESCE(MAX(PLAN_MANTENIMIENTO_HISTORIAL_ID), 0) AS UltimoPlanId from PLAN_MANTENIMIENTO_HISTORIAL") 
                        const ultimoHistorialId = resultUltimoHistorial.recordset[0].UltimoPlanId;         
            
                        console.log('ULTIMO HISTORIAL: '+ultimoHistorialId)

                        const resultTrabajos = await pool.request()
                            .input("id", sql.Numeric, planId)
                            .query(queries.getTrabajosPlanMantenimiento)

                        console.log('TRABAJOS PLAN: '+resultTrabajos.recordset.length)

                        if (resultTrabajos.recordset.length > 0) {
                            for (let j = 0; j < resultTrabajos.recordset.length; j++) {
                                let trabajoId = resultTrabajos.recordset[j].PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID;

                                await pool.request()
                                    .input("plan_mantenimiento_historial_id", sql.Numeric, ultimoHistorialId)
                                    .input("plan_mantenimiento_trabajo_id", sql.Numeric, trabajoId)
                                    .input("plan_mantenimiento_estado", sql.Bit, 0)
                                    .input("plan_mantenimiento_fecha", sql.VarChar, null)
                                    .query(queries.newPlanMantenimientoHistorialDetalle);
                            }   
                        }
                    }
                }
            }
        } catch (error) {
            // Si ocurre un error, envía un mensaje de error
            console.error('Error al guardar producto asignado:', error);
            res.status(500).send('Error interno del servidor.');
        }
        
        console.log('FINALIZO CORRECTO...')
        res.json({ message: "OK" });
    } catch (error) {
        // Si ocurre un error, envía un mensaje de error
        console.error('Error al guardar los datos:', error);
        res.status(500).send('Error interno del servidor.');
    }
}