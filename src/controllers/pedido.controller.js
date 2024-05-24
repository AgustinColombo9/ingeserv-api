import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";
import { Buffer } from 'buffer';

export const getPedidoEstados = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getPedidoEstados)

        res.json(result.recordset);
    }
    catch (error) {
        console.log ("ERROR");
        
        res.status(500);
        res.send(error.message);
    }
};

export const getPedidosEstadoId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getPedidosEstadoId)

        res.json(result.recordset);
    }
    catch (error) {
        console.log ("ERROR");
        
        res.status(500);
        res.send(error.message);
    }
};

export const getPedidoCabeceraId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getPedidoCabeceraId)

        res.json(result.recordset[0]);
    }
    catch (error) {
        console.log ("ERROR");
        
        res.status(500);
        res.send(error.message);
    }
}

export const newPedidoCabecera = async (req, res) => {
    const {
        pedido_fecha, 
        pedido_cliente_id, 
        pedido_estado_id, 
        pedido_fecha_update, 
        pedido_descripcion, 
        pedido_transporte, 
        pedido_comprobante, 
        pedido_cantidad, 
        pedido_precio
    } = req.body;
    
    console.log('PEDIDO NEW: '+pedido_fecha+' - '+pedido_cliente_id+' - '+pedido_estado_id+' - '+pedido_fecha_update+' - '+pedido_descripcion+' - '+pedido_transporte+' - '+pedido_comprobante+' - '+pedido_cantidad+' - '+pedido_precio)

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("pedido_fecha", sql.VarChar, pedido_fecha) 
        .input("pedido_cliente_id", sql.Numeric, pedido_cliente_id) 
        .input("pedido_estado_id", sql.Numeric, pedido_estado_id) 
        .input("pedido_fecha_update", sql.VarChar, pedido_fecha_update) 
        .input("pedido_descripcion", sql.VarChar, pedido_descripcion)
        .input("pedido_transporte", sql.VarChar, pedido_transporte) 
        .input("pedido_comprobante", sql.VarChar, pedido_comprobante)
        .input("pedido_cantidad", sql.Numeric, pedido_cantidad) 
        .input("pedido_precio", sql.Float, pedido_precio) 
        .query(queries.newPedidoCabecera); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }     
};

export const updatePedidoCabecera = async (req, res) => {
    const { id } = req.params;
    console.log('UPDATE')

    const {
        pedido_fecha, 
        pedido_cliente_id, 
        pedido_estado_id, 
        pedido_fecha_update, 
        pedido_descripcion, 
        pedido_transporte, 
        pedido_comprobante, 
        pedido_cantidad, 
        pedido_precio
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input("pedido_fecha", sql.VarChar, pedido_fecha) 
        .input("pedido_cliente_id", sql.Numeric, pedido_cliente_id) 
        .input("pedido_estado_id", sql.Numeric, pedido_estado_id) 
        .input("pedido_fecha_update", sql.VarChar, pedido_fecha_update) 
        .input("pedido_descripcion", sql.VarChar, pedido_descripcion)
        .input("pedido_transporte", sql.VarChar, pedido_transporte) 
        .input("pedido_comprobante", sql.VarChar, pedido_comprobante)
        .input("pedido_cantidad", sql.Numeric, pedido_cantidad) 
        .input("pedido_precio", sql.Float, pedido_precio) 
        .input('id', sql.BigInt, id)
        .query(queries.updatePedidoCabecera); 

        res.json({ message: "OK" });
        console.log('CORRECTO')
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    }     
};

export const deletePedidoCabecera = async (req, res) => {
    const { id } = req.params;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input('id', sql.BigInt, id) 
        .query(queries.deletePedidoCabecera); 

        res.json({ message: "OK" });
        console.log('CORRECTO')
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    } 
}

export const getUltimoPedidoId = async (req, res) => {
    try{
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getUltimoPedidoId);
        
        res.json(result.recordset[0]);
    }
    catch (error) {
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    }
}

export const getPedidosUsuarioId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getPedidosUsuarioId)

        res.json(result.recordset);
    }
    catch (error) {
        console.log ("ERROR");
        
        res.status(500);
        res.send(error.message);
    }
}
    

export const getPedidosUsuarioEstadoId = async (req, res) => {
    const { id, estadoId } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .input('estado_id', estadoId)
        .query(queries.getPedidosUsuarioEstadoId)

        res.json(result.recordset);
    }
    catch (error) {
        console.log ("ERROR");
        
        res.status(500);
        res.send(error.message);
    }
};

export const updateImagenPedido = async (req, res) => {
    const { id } = req.params;

    const {
        index,
        pedido_imagen 
    } = req.body;

    const buffer = Buffer.from (pedido_imagen, 'base64')

    try {
        if (parseInt(index) === 0) {
            const pool = await getConnection(); 
            await pool.request() 
            .input("cliente_delivery_foto_uno", sql.VarBinary, buffer) 
            .input('id', sql.BigInt, id) 
            .query(queries.updateImagenUnoPedido); 

            res.json({ message: "OK" });
            console.log('CORRECTO')
        }
        else if (parseInt(index) === 1) {
            const pool = await getConnection(); 
            await pool.request() 
            .input("cliente_delivery_foto_dos", sql.VarBinary, buffer) 
            .input('id', sql.BigInt, id) 
            .query(queries.updateImagenDosPedido); 

            res.json({ message: "OK" });
            console.log('CORRECTO')
        }
        else if (parseInt(index) === 2) {
            const pool = await getConnection(); 
            await pool.request() 
            .input("cliente_delivery_foto_tres", sql.VarBinary, buffer) 
            .input('id', sql.BigInt, id) 
            .query(queries.updateImagenTresPedido); 

            res.json({ message: "OK" });
            console.log('CORRECTO')
        }
        else {
            const pool = await getConnection(); 
            await pool.request() 
            .input("cliente_delivery_foto_cuatro", sql.VarBinary, buffer) 
            .input('id', sql.BigInt, id) 
            .query(queries.updateImagenCuatroPedido); 

            res.json({ message: "OK" });
            console.log('CORRECTO')
        }
    }
    catch (error){
        console.log('ERROR: '+error)
    }

}