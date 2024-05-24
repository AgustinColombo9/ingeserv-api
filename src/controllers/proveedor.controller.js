import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";

export const newProveedor = async (req, res) => {
    const {
        proveedor_razon_social, 
        proveedor_situacion_iva_id, 
        proveedor_tipo_identificacion_id, 
        proveedor_identificacion, 
        proveedor_domicilio, 
        proveedor_provincia_id, 
        proveedor_ciudad_id, 
        proveedor_contacto, 
        proveedor_telefono, 
        proveedor_celular, 
        proveedor_email, 
        proveedor_fecha_alta 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("proveedor_razon_social", sql.VarChar, proveedor_razon_social) 
        .input("proveedor_situacion_iva_id", sql.Numeric, proveedor_situacion_iva_id) 
        .input("proveedor_tipo_identificacion_id", sql.Numeric, proveedor_tipo_identificacion_id) 
        .input("proveedor_identificacion", sql.VarChar, proveedor_identificacion)        
        .input("proveedor_domicilio", sql.VarChar, proveedor_domicilio) 
        .input("proveedor_provincia_id", sql.Numeric, proveedor_provincia_id) 
        .input("proveedor_ciudad_id", sql.Numeric, proveedor_ciudad_id) 
        .input("proveedor_contacto", sql.VarChar, proveedor_contacto) 
        .input("proveedor_telefono", sql.VarChar, proveedor_telefono) 
        .input("proveedor_celular", sql.VarChar, proveedor_celular) 
        .input("proveedor_email", sql.VarChar, proveedor_email) 
        .input("proveedor_fecha_alta", sql.VarChar, proveedor_fecha_alta) 
        .query(queries.newProveedor); 

        const id = await pool.request() 
            .query(queries.getUltimoProveedorId);

        res.json({ message: "OK", PROVEEDOR_ID: id.recordset[0].PROVEEDOR_ID });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }    
};

export const updateProveedor = async (req, res) => {
    const { id } = req.params;
    
    const {
        proveedor_razon_social, 
        proveedor_situacion_iva_id, 
        proveedor_tipo_identificacion_id, 
        proveedor_identificacion, 
        proveedor_domicilio, 
        proveedor_provincia_id, 
        proveedor_ciudad_id, 
        proveedor_contacto, 
        proveedor_telefono, 
        proveedor_celular, 
        proveedor_email, 
        proveedor_fecha_alta
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input('id', sql.BigInt, id) 
        .input("proveedor_razon_social", sql.VarChar, proveedor_razon_social) 
        .input("proveedor_situacion_iva_id", sql.Numeric, proveedor_situacion_iva_id) 
        .input("proveedor_tipo_identificacion_id", sql.Numeric, proveedor_tipo_identificacion_id) 
        .input("proveedor_identificacion", sql.VarChar, proveedor_identificacion)        
        .input("proveedor_domicilio", sql.VarChar, proveedor_domicilio) 
        .input("proveedor_provincia_id", sql.Numeric, proveedor_provincia_id) 
        .input("proveedor_ciudad_id", sql.Numeric, proveedor_ciudad_id) 
        .input("proveedor_contacto", sql.VarChar, proveedor_contacto) 
        .input("proveedor_telefono", sql.VarChar, proveedor_telefono) 
        .input("proveedor_celular", sql.VarChar, proveedor_celular) 
        .input("proveedor_email", sql.VarChar, proveedor_email) 
        .input("proveedor_fecha_alta", sql.VarChar, proveedor_fecha_alta) 
        .query(queries.updateProveedor); 

        res.json({ message: "OK" });
        console.log('CORRECTO')
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO')
    }   

};

export const getProveedores = async (req, res) => { 
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getProveedores); 

        //res.json(result.recordset);
        
        res.status(200).json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 

};

export const getProveedorId = async (req, res) => { 
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getProveedorId);
        
        res.json(result.recordset[0]);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

