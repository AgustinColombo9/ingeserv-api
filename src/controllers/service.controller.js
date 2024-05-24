import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";

export const newService = async (req, res) => {
    const {
        service_producto_id, 
        service_cliente_id, 
        service_numero_orden, 
        service_fecha, 
        service_empleado_id, 
        service_observacion, 
        service_precio 
    } = req.body;

    console.log('SERVICE A GUARDAR: '+service_producto_id+' - '+service_cliente_id+' - '+service_numero_orden+' - '+service_fecha+' - '+service_empleado_id+' - '+service_observacion)

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("service_producto_id", sql.Numeric, service_producto_id) 
        .input("service_cliente_id", sql.Numeric, service_cliente_id) 
        .input("service_numero_orden", sql.VarChar, service_numero_orden) 
        .input("service_fecha", sql.VarChar, service_fecha) 
        .input("service_empleado_id", sql.Numeric, service_empleado_id) 
        .input("service_observacion", sql.VarChar, service_observacion) 
        .input("service_precio", sql.Decimal, service_precio) 
        .query(queries.newService); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }     
};

export const updateService = async (req, res) => {
    const { id } = req.params;

    const {
        service_producto_id, 
        service_cliente_id, 
        service_numero_orden, 
        service_fecha, 
        service_empleado_id, 
        service_observacion, 
        service_precio 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input("service_producto_id", sql.Numeric, service_producto_id) 
        .input("service_cliente_id", sql.Numeric, service_cliente_id) 
        .input("service_numero_orden", sql.VarChar, service_numero_orden) 
        .input("service_fecha", sql.VarChar, service_fecha) 
        .input("service_empleado_id", sql.Numeric, service_empleado_id) 
        .input("service_observacion", sql.VarChar, service_observacion) 
        .input("service_precio", sql.Decimal, service_precio) 
        .input('id', sql.BigInt, id)
        .query(queries.updateService); 

        res.json({ message: "OK" });
        console.log('CORRECTO')
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    }     
};

export const deleteService = async (req, res) => {
    const { id } = req.params;

    try { 
        const pool = await getConnection();
        await pool.request()
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.deleteService); 
        
        res.status(200)
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    } 
};

export const getServiceId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getServiceId);
        
        res.json(result.recordset[0]);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getServicesEmpleadoId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getServicesEmpleadoId);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getServices = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getServices);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

/////////////////////////////////////////////////////////////////////

export const newServiceTarea = async (req, res) => {
    const {
        service_tarea_service_id, 
        service_tarea_tarea_id, 
        service_tarea_observacion, 
        service_tarea_precio, 
        service_tarea_fecha, 
        service_tarea_estado_id, 
        service_tarea_fecha_inicio, 
        service_tarea_hora_inicio, 
        service_tarea_fecha_fin, 
        service_tarea_hora_fin
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("service_tarea_service_id", sql.Numeric, service_tarea_service_id) 
        .input("service_tarea_tarea_id", sql.Numeric, service_tarea_tarea_id) 
        .input("service_tarea_observacion", sql.VarChar, service_tarea_observacion)
        .input("service_tarea_precio", sql.Decimal, service_tarea_precio) 
        .input("service_tarea_fecha", sql.VarChar, service_tarea_fecha) 
        .input("service_tarea_estado_id", sql.Numeric, service_tarea_estado_id) 
        .input("service_tarea_fecha_inicio", sql.VarChar, service_tarea_fecha_inicio) 
        .input("service_tarea_hora_inicio", sql.Time, service_tarea_hora_inicio) 
        .input("service_tarea_fecha_fin", sql.VarChar, service_tarea_fecha_fin) 
        .input("service_tarea_hora_fin", sql.Time, service_tarea_hora_fin) 
        .query(queries.newServiceTarea); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }     
};

export const updateServiceTarea = async (req, res) => {
    const { id } = req.params;

    const {
        service_tarea_service_id, 
        service_tarea_tarea_id, 
        service_tarea_observacion, 
        service_tarea_precio, 
        service_tarea_fecha, 
        service_tarea_estado_id, 
        service_tarea_fecha_inicio, 
        service_tarea_hora_inicio, 
        service_tarea_fecha_fin, 
        service_tarea_hora_fin
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input("service_tarea_service_id", sql.Numeric, service_tarea_service_id) 
        .input("service_tarea_tarea_id", sql.Numeric, service_tarea_tarea_id) 
        .input("service_tarea_observacion", sql.VarChar, service_tarea_observacion)
        .input("service_tarea_precio", sql.Decimal, service_tarea_precio) 
        .input("service_tarea_fecha", sql.VarChar, service_tarea_fecha) 
        .input("service_tarea_estado_id", sql.Numeric, service_tarea_estado_id) 
        .input("service_tarea_fecha_inicio", sql.VarChar, service_tarea_fecha_inicio) 
        .input("service_tarea_hora_inicio", sql.Time, service_tarea_hora_inicio) 
        .input("service_tarea_fecha_fin", sql.VarChar, service_tarea_fecha_fin) 
        .input("service_tarea_hora_fin", sql.Time, service_tarea_hora_fin) 
        .input('id', sql.BigInt, id)
        .query(queries.updateServiceTarea); 

        res.json({ message: "OK" });
        console.log('CORRECTO')
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    }     
};

export const deleteServiceTarea = async (req, res) => {
    const { id } = req.params;

    try { 
        const pool = await getConnection();
        await pool.request()
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.deleteServiceTarea); 
        
        res.status(200)
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    } 
};

export const getServiceTareaId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getServiceTareaId);
        
        res.json(result.recordset[0]);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getServiceTareasServiceId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getServiceTareasServiceId);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

/////////////////////////////////////////////////////////////////////////

export const newServiceInsumo = async (req, res) => {

    console.log('GUARDAR INSUMO')

    const {
        service_insumo_producto_id, 
        service_insumo_service_id, 
        service_insumo_descripcion, 
        service_insumo_tarea_id, 
        service_insumo_cantidad 
    } = req.body;

    console.log('GUARDAR INSUMO'+ service_insumo_producto_id+' - '+service_insumo_service_id+' - '+service_insumo_descripcion+' - '+service_insumo_tarea_id+' - '+service_insumo_cantidad)

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("service_insumo_producto_id", sql.Numeric, service_insumo_producto_id) 
        .input("service_insumo_service_id", sql.Numeric, service_insumo_service_id) 
        .input("service_insumo_descripcion", sql.VarChar, service_insumo_descripcion) 
        .input("service_insumo_tarea_id", sql.Numeric, service_insumo_tarea_id) 
        .input("service_insumo_cantidad", sql.Decimal, service_insumo_cantidad) 
        .query(queries.newServiceInsumo); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }     
};

export const updateServiceInsumo = async (req, res) => {
    const { id } = req.params;

    const {
        service_insumo_producto_id, 
        service_insumo_service_id, 
        service_insumo_descripcion, 
        service_insumo_tarea_id, 
        service_insumo_cantidad 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input("service_insumo_producto_id", sql.Numeric, service_insumo_producto_id) 
        .input("service_insumo_service_id", sql.Numeric, service_insumo_service_id) 
        .input("service_insumo_descripcion", sql.VarChar, service_insumo_descripcion) 
        .input("service_insumo_tarea_id", sql.Numeric, service_insumo_tarea_id) 
        .input("service_insumo_cantidad", sql.Decimal, service_insumo_cantidad)
        .input('id', sql.BigInt, id)
        .query(queries.updateServiceInsumo); 

        res.json({ message: "OK" });
        console.log('CORRECTO')
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    }     
};

export const deleteServiceInsumo = async (req, res) => {
    const { id } = req.params;

    try { 
        const pool = await getConnection();
        await pool.request()
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.deleteServiceInsumo); 
        
        res.status(200)
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    } 
};

export const getServiceInsumoId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getServiceInsumoId);
        
        res.json(result.recordset[0]);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getServiceInsumosTareaId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getServiceInsumosTareaId);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getServiceInsumosServiceId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getServiceInsumosServiceId);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

//////////////////////////////////////////////////////////////////////////////////

export const getServiceTareas = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getServiceTareas);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getEstadosTarea = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getEstadosTarea);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};