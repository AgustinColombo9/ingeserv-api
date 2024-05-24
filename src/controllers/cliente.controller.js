import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";

export const newCliente = async (req, res) => {
    const {cliente_razon_social, 
        cliente_situacion_iva, 
        cliente_tipo_identificacion, 
        cliente_identificacion, 
        cliente_provincia, 
        cliente_ciudad, 
        cliente_domicilio, 
        cliente_contacto, 
        cliente_telefono, 
        cliente_celular, 
        cliente_email, 
        cliente_estado, 
        cliente_fecha_alta, 
        cliente_usuario, 
        cliente_edad 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("cliente_razon_social", sql.VarChar, cliente_razon_social) 
        .input("cliente_situacion_iva", sql.Numeric, cliente_situacion_iva) 
        .input("cliente_tipo_identificacion", sql.Numeric, cliente_tipo_identificacion) 
        .input("cliente_identificacion", sql.VarChar, cliente_identificacion)
        .input("cliente_provincia", sql.Numeric, cliente_provincia) 
        .input("cliente_ciudad", sql.Numeric, cliente_ciudad) 
        .input("cliente_domicilio", sql.VarChar, cliente_domicilio) 
        .input("cliente_contacto", sql.VarChar, cliente_contacto) 
        .input("cliente_telefono", sql.VarChar, cliente_telefono) 
        .input("cliente_celular", sql.VarChar, cliente_celular) 
        .input("cliente_email", sql.VarChar, cliente_email) 
        .input("cliente_estado", sql.Numeric, cliente_estado) 
        .input("cliente_fecha_alta", sql.VarChar, cliente_fecha_alta) 
        .input("cliente_usuario", sql.Numeric, cliente_usuario) 
        .input("cliente_edad", sql.Numeric, cliente_edad) 
        .query(queries.newCliente); 

        const ultimoClienteIdResult = await pool.request().query("SELECT (COALESCE(MAX(CLIENTE_ID), 0) + 1) AS UltimoClienteId from CLIENTE")
        const ultimoClienteId = ultimoClienteIdResult.recordset[0].UltimoClienteId;

        res.json({ message: "OK", CLIENTE_ID: ultimoClienteId });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }    
};

export const updateCliente = async (req, res) => {
    const { id } = req.params;
    
    const {cliente_razon_social, 
        cliente_situacion_iva, 
        cliente_tipo_identificacion, 
        cliente_identificacion, 
        cliente_provincia, 
        cliente_ciudad, 
        cliente_domicilio, 
        cliente_contacto, 
        cliente_telefono, 
        cliente_celular, 
        cliente_email, 
        cliente_estado, 
        cliente_fecha_alta, 
        cliente_edad 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input('id', sql.BigInt, id) 
        .input("cliente_razon_social", sql.VarChar, cliente_razon_social) 
        .input("cliente_situacion_iva", sql.Numeric, cliente_situacion_iva) 
        .input("cliente_tipo_identificacion", sql.Numeric, cliente_tipo_identificacion) 
        .input("cliente_identificacion", sql.VarChar, cliente_identificacion)
        .input("cliente_provincia", sql.Numeric, cliente_provincia)
        .input("cliente_ciudad", sql.Numeric, cliente_ciudad)
        .input("cliente_domicilio", sql.VarChar, cliente_domicilio)
        .input("cliente_contacto", sql.VarChar, cliente_contacto)
        .input("cliente_telefono", sql.VarChar, cliente_telefono)
        .input("cliente_celular", sql.VarChar, cliente_celular)
        .input("cliente_email", sql.VarChar, cliente_email)
        .input("cliente_estado", sql.Numeric, cliente_estado)
        .input("cliente_fecha_alta", sql.VarChar, cliente_fecha_alta)
        .input("cliente_edad", sql.Numeric, cliente_edad)
        .query(queries.updateCliente); 

        res.json({ message: "OK" });
        console.log('CORRECTO')
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO')
    }   

};

export const updateAvatarCliente = async (req, res) => {
    const { id } = req.params;
    const {
        cliente_avatar 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("cliente_avatar", sql.VarBinary, cliente_avatar)
        .input('id', sql.BigInt, id) 
        .query(queries.updateAvatarCliente); 

        res.json({ message: "OK" });
        console.log('CORRECTO')
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO')
    } 
}

export const deleteCliente = async (req, res) => {
/*    const { id } = req.params;

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
*/
};

export const getClientes = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getClientes);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getClienteId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getClienteId);
        
        res.json(result.recordset[0]);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getClienteEstados = async (req, res) => {
    try{
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getClienteEstados);

        res.json(result.recordset)
    }  
    catch (error) {
        console.log("ERROR");
        
        res.status(500);
        res.send(error.message);
    }
}

export const getClienteTipos = async (req, res) => {
    try{
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getClienteTipos);

        res.json(result.recordset)
    }  
    catch (error) {
        console.log("ERROR");
        
        res.status(500);
        res.send(error.message);
    }
}

export const getClientesEmpleado = async (req, res) => {
    try{
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getClientesEmpleado);

        res.json(result.recordset)
    }  
    catch (error) {
        console.log("ERROR");
        
        res.status(500);
        res.send(error.message);
    }
}
