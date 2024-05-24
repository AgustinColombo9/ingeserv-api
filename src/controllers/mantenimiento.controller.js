import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";

export const getPlanesVigencia = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getPlanesVigencia); 

        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};

export const newPlanVigencia = async (req, res) => {
    const {
        plan_descripcion, 
        plan_dias, 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("plan_vigencia_descripcion", sql.VarChar, plan_descripcion) 
        .input("plan_vigencia_dias", sql.Numeric, plan_dias) 
        .query(queries.newPlanVigencia); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }     
};

export const updatePlanVigencia = async (req, res) => {
    const { id } = req.params;

    const {
        plan_descripcion,
        plan_dias  
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input("plan_descripcion", sql.VarChar, plan_descripcion) 
        .input("plan_dias", sql.Numeric, plan_dias) 
        .input('id', sql.BigInt, id)
        .query(queries.updatePlanVigencia); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    }     
};

/////////////////////////////////////////////////////////////////

export const getPlanesMantenimiento = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getPlanesMantenimiento); 

        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};

export const newPlanMantenimiento = async (req, res) => {
    const {
        plan_fecha, 
        plan_descripcion, 
        plan_vigencia_id, 
        plan_observacion, 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("plan_fecha", sql.VarChar, plan_fecha) 
        .input("plan_descripcion", sql.VarChar, plan_descripcion) 
        .input("plan_vigencia_id", sql.Numeric, plan_vigencia_id) 
        .input("plan_observacion", sql.VarChar, plan_observacion) 
        .query(queries.newPlanMantenimiento); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }     
};

export const updatePlanMantenimiento = async (req, res) => {
    const { id } = req.params;

    const {
        plan_fecha, 
        plan_descripcion, 
        plan_vigencia_id, 
        plan_observacion,
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input("plan_fecha", sql.VarChar, plan_fecha) 
        .input("plan_descripcion", sql.VarChar, plan_descripcion) 
        .input("plan_vigencia_id", sql.Numeric, plan_vigencia_id) 
        .input("plan_observacion", sql.VarChar, plan_observacion) 
        .input('id', sql.BigInt, id)
        .query(queries.updatePlanMantenimiento); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    }     
};

///////////////////////////////////////////////////////////////////////

export const newPlanMantenimientoProducto = async (req, res) => {
    const {
        plan_mantenimiento_id, 
        plan_producto_id, 
        plan_fecha 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("plan_mantenimiento_id", sql.Numeric, plan_mantenimiento_id) 
        .input("plan_producto_id", sql.Numeric, plan_producto_id) 
        .input("plan_fecha", sql.VarChar, plan_fecha)
        .query(queries.newPlanMantenimientoProducto); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }     
};

export const updatePlanMantenimientoProducto = async (req, res) => {
    const { id } = req.params;

    const {
        plan_mantenimiento_id,
        plan_producto_id  
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input("plan_mantenimiento_id", sql.Numeric, plan_mantenimiento_id) 
        .input("plan_producto_id", sql.Numeric, plan_producto_id) 
        .input('id', sql.BigInt, id)
        .query(queries.updatePlanMantenimientoProducto); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    }     
};

export const deletePlanMantenimientoProducto = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        await pool.request()
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.deletePlanMantenimientoProducto); 
        
        res.status(200).json({ message: "OK" });
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
}

////////////////////////////////////////////////////////////////////////

export const getOrdenMantenimientoEstado = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getOrdenMantenimientoEstado); 

        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};

export const newOrdenMantenimientoEstado = async (req, res) => {
    const {
        orden_estado_descripcion, 
        orden_estado_color, 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("orden_estado_descripcion", sql.VarChar, orden_estado_descripcion) 
        .input("orden_estado_color", sql.VarChar, orden_estado_color) 
        .query(queries.newOrdenMantenimientoEstado); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }     
};

export const getPlanesMantenimientoProductoId = async (req, res) => {
    const { id } = req.params;

    try { 
        const pool = await getConnection(); 
        const result = await pool
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.getPlanesMantenimientoProductoId); 

        res.json(result.recordset);
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    } 
}

export const getPlanesMantenimientoVigenciaId = async (req, res) => {
    const { id } = req.params;

    try { 
        const pool = await getConnection(); 
        const result = await pool
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.getPlanesMantenimientoVigenciaId); 

        res.json(result.recordset);
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    } 
}

export const updateOrdenMantenimientoEstado = async (req, res) => {
    const { id } = req.params;

    const {
        orden_estado_descripcion, 
        orden_estado_color, 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input("orden_estado_descripcion", sql.VarChar, orden_estado_descripcion) 
        .input("orden_estado_color", sql.VarChar, orden_estado_color)  
        .input('id', sql.BigInt, id)
        .query(queries.updatePlanVigencia); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    }     
};

export const getOrdenesMantenimientoProductoId = async (req, res) => {
    const { id } = req.params;
    
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.getOrdenesMantenimientoProductoId); 

        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};

export const newOrdenMantenimiento = async (req, res) => {
    const {
        orden_producto_id, 
        orden_plan_producto_id, 
        orden_fecha, 
        orden_estado_id, 
        orden_fecha_update, 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request() 
        .input("orden_producto_id", sql.Numeric, orden_producto_id) 
        .input("orden_plan_producto_id", sql.Numeric, orden_plan_producto_id) 
        .input("orden_fecha", sql.VarChar, orden_fecha) 
        .input("orden_estado_id", sql.Numeric, orden_estado_id) 
        .input("orden_fecha_update", sql.VarChar, orden_fecha_update) 
        .query(queries.newOrdenMantenimiento); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }     
};

export const vencimientoOrdenMantenimiento = async (req, res) => {
    const { id } = req.params;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input("orden_estado_id", sql.Numeric, 2) 
        .input('id', sql.BigInt, id)
        .query(queries.vencimientoOrdenMantenimiento); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    }
}

export const completarOrdenMantenimiento = async (req, res) => {
    const { id } = req.params;

    const {
        orden_producto_id, 
        orden_plan_producto_id, 
        plan_vigencia_dias, 
    } = req.body;

    const fechaSistema = new Date();
    const fechaFormateada = fechaSistema.toISOString().slice(0, 10);
    fechaSistema.setDate(fechaSistema.getDate() + plan_vigencia_dias);
    const vigencia = fechaSistema.toISOString().slice(0, 10); // Formatear fecha como YYYY-MM-DD

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input("orden_estado_id", sql.Numeric, 3) 
        .input("orden_fecha_update", sql.VarChar, fechaFormateada)
        .input('id', sql.BigInt, id)
        .query(queries.completarOrdenMantenimiento); 
        

        await pool.request() 
        .input("orden_producto_id", sql.Numeric, orden_producto_id) 
        .input("orden_plan_producto_id", sql.Numeric, orden_plan_producto_id) 
        .input("orden_fecha", sql.VarChar, vigencia) 
        .input("orden_estado_id", sql.Numeric, 1) 
        .input("orden_fecha_update", sql.VarChar, orden_fecha_update) 
        .query(queries.newOrdenMantenimiento); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    }     
};

///////////////////////////////////////////////////////////////////////

export const getTrabajosPlanMantenimiento = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getTrabajosPlanMantenimiento);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const savePlanMantenimiento = async (req, res) => {
    const { datos, arrayDatos } = req.body;

    console.log('PLAN ID: '+datos.plan_id)
    let planId = 0
    const { 
        plan_producto, 
        plan_id, 
        plan_fecha, 
        plan_descripcion, 
        plan_observacion, 
        plan_vigencia_id, 
    } = datos; 

    console.log('PLAN: PLAN-PROD:'+ plan_producto +'plan ID= '+plan_id+' - '+plan_fecha+'  -  '+plan_descripcion+'  -  '+plan_observacion+'  -  '+plan_vigencia_id)
    if (arrayDatos){
        console.log('DETALLE: '+arrayDatos.length)
    }
    else{
        console.log('DETALLE VACIO')
    }
    if (arrayDatos && arrayDatos.length > 0) {
        for (const detalle of arrayDatos) {
            const {
                PLAN_MANTENIMIENTO_TRABAJO_ID, 
                PLAN_MANTENIMIENTO_TRABAJO_PLAN_ID, 
                PLAN_MANTENIMIENTO_DESCRIPCION, 
                PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID, 
                TRABAJOS_DESCRIPCION, 
                TRABAJOS_OBSERVACION 
            } = detalle;
            console.log('TRABAJO: '+PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID+'  -  '+TRABAJOS_DESCRIPCION +' | '+PLAN_MANTENIMIENTO_TRABAJO_PLAN_ID+' | '+PLAN_MANTENIMIENTO_TRABAJO_ID)
        }
    }

    try { 
        const pool = await getConnection();
        if (plan_id === 0) { 
            await pool.request() 
                .input("plan_fecha", sql.VarChar, plan_fecha) 
                .input("plan_descripcion", sql.VarChar, plan_descripcion) 
                .input("plan_vigencia_id", sql.Numeric, plan_vigencia_id) 
                .input("plan_observacion", sql.VarChar, plan_observacion) 
                .query(queries.newPlanMantenimiento); 

            const result = await pool.request().query("SELECT MAX(PLAN_MANTENIMIENTO_ID) AS UltimoPlanId from TAREAS")
            planId = parseInt(result.recordset[0].UltimoPlanId);

            console.log('PLAN ID nuevo: '+planId)
        }
        else {
/*
            await pool.request()  
                .input("plan_fecha", sql.VarChar, plan_fecha) 
                .input("plan_descripcion", sql.VarChar, plan_descripcion) 
                .input("plan_vigencia_id", sql.Numeric, plan_vigencia_id) 
                .input("plan_observacion", sql.VarChar, plan_observacion) 
                .input('id', sql.BigInt, plan_id)
                .query(queries.updatePlanMantenimiento); 
*/
            console.log('POSIBLE UPDATE CORRECTO')
            console.log('OK')
        }

        if (planId && planId > 0){
            console.log('CREAR NUEVO PLAN EQUIPO')
            await pool.request() 
                .input("plan_mantenimiento_id", sql.Numeric, planId) 
                .input("plan_producto_id", sql.Numeric, productoId) 
                .query(queries.newPlanMantenimientoProducto);
        }
        else {
            console.log('PLAN_ID: '+plan_id)
            plan_id = planId
            console.log('PLAN ID: '+plan_id)
        }

        if (arrayDatos && arrayDatos.length > 0) {
            for (const detalle of arrayDatos) {
                const {
                    PLAN_MANTENIMIENTO_TRABAJO_ID, 
                    PLAN_MANTENIMIENTO_TRABAJO_PLAN_ID, 
                    PLAN_MANTENIMIENTO_DESCRIPCION, 
                    PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID, 
                    TRABAJOS_DESCRIPCION, 
                    TRABAJOS_OBSERVACION  
                } = detalle;
    
                console.log('TRABAJO ID: '+PLAN_MANTENIMIENTO_TRABAJO_ID)

                if (PLAN_MANTENIMIENTO_TRABAJO_ID > 0) {
/*                    await pool.request()
                        .input("plan_mantenimiento_plan_id", sql.Numeric, PLAN_MANTENIMIENTO_TRABAJO_PLAN_ID)
                        .input("plan_mantenimiento_trabajo_id", sql.Numeric, PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID)
                        .query(queries.newPlanMantenimientoTrabajo);
*/
                    console.log('OK')
                } 
                else { 
                    console.log('TRABAJO TRABAJO ID: '+PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID)
                    if (PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID > 0) {

                        console.log('crear plan trabajo')
                        console.log('plan - trabajo: '+plan_id+' - '+PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID)

                        try {
                            await pool.request()
                                .input("plan_mantenimiento_plan_id", sql.Numeric, plan_id)
                                .input("plan_mantenimiento_trabajo_id", sql.Numeric, PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID)
                                .query(queries.newPlanMantenimientoTrabajo);
                        }
                        catch (error){
                            console.log(error.message)
                            //res.status(500); 
                            //res.send(error.message); 
                        }

                        console.log('creo plan trabajo CORRECTAMENTE')
                    }
                    else {

                        console.log('crear trabajo')

                        await pool.request()
                            .input("trabajo_descripcion", sql.VarChar, TRABAJOS_DESCRIPCION) 
                            .input("trabajo_observacion", sql.VarChar, TRABAJOS_OBSERVACION) 
                            .query(queries.newTrabajo); 
        
                        console.log('creo trabajo CORRECTAMENTE')

                        const ultimoTrabajodResult = await pool.request().query("SELECT (COALESCE(MAX(TRABAJOS_ID), 0) + 1) AS UltimoTrabajoId from TRABAJOS")
                        const ultimaTrabajoId = ultimoTrabajodResult.recordset[0].UltimoTrabajoId;
                        
                        console.log('NUEVO TRABAJO: '+ultimaTrabajoId)

                        console.log('NUEVO PLAN TRABAJO: plan = '+plan_id+'  -  trabajo = '+ultimaTrabajoId)

                        await pool.request()
                            .input("plan_mantenimiento_plan_id", sql.Numeric, plan_id)
                            .input("plan_mantenimiento_trabajo_id", sql.Numeric, ultimaTrabajoId)
                            .query(queries.newPlanMantenimientoTrabajo);   
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
}

export const saveTrabajosPlan = async (req, res) => {
    const detalles = req.body;
/*
    try {
        const pool = await getConnection();

        for (const detalle of detalles) {
            const {
                PLAN_MANTENIMIENTO_TRABAJOS_ID, 
                PLAN_MANTENIMIENTO_TRABAJO_PLAN_ID, 
                PLAN_MANTENIMIENTO_DESCRIPCION, 
                PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID, 
                TRABAJOS_DESCRIPCION, 
                TRABAJOS_OBSERVACION 
            } = detalle;

            if (PLAN_MANTENIMIENTO_TRABAJOS_ID > 0) {
                await pool.request()
                    .input("plan_mantenimiento_id", sql.Numeric, PLAN_MANTENIMIENTO_TRABAJO_PLAN_ID)
                    .input("trabajo_id", sql.Numeric, PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID)
                    .query(queries.newPlanMantenimientoTrabajo);
            }
            else {
                // new Tarea 
                const pool = await getConnection(); 
                await pool.request()
                    .input("tarea_descripcion", sql.VarChar, TAREAS_DESCRIPCION) 
                    .input("tarea_detalle", sql.VarChar, TAREAS_DETALLE) 
                    .query(queries.newTarea); 

                const ultimaTareaIdResult = await pool.request().query("SELECT MAX(TAREAS_ID) AS UltimoTareaId from TAREAS")
                const ultimaTareaId = ultimaTareaIdResult.recordset[0].UltimoTareaId;
                
                await pool.request()
                    .input("trabajo_tarea_trabajo_id", sql.Numeric, TRABAJOS_TAREAS_TRABAJOS_ID)
                    .input("trabajo_tarea_tarea_id", sql.Numeric, ultimaTareaId)
                    .query(queries.newTareaTrabajo);
            }
        }

        res.json({ message: "OK" });
    } 
    catch (error) { 
        console.log('ERROR: '+error.message)
        res.status(500); 
        res.send(error.message); 
    }  */
}

export const newPlanMantenimientoTrabajo = async (req, res) => {
    const {
        plan_mantenimiento_id, 
        trabajo_id, 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input("plan_mantenimiento_id", sql.Numeric, plan_mantenimiento_id) 
        .input("trabajo_id", sql.Numeric, trabajo_id) 
        .query(queries.newPlanMantenimientoTrabajo); 
        
        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }     
};

export const deletePlanMantenimientoTrabajo = async (req, res) => {
    const { id } = req.params;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input('id', sql.BigInt, id)
        .query(queries.deletePlanMantenimientoTrabajo); 

        res.json({ message: "OK" });
        console.log('CORRECTO')
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    }     
};

//////////////////////////////////////////////////////////////////////

export const newPlanMantenimientoHistorial = async (req, res) => {
    const {
        plan_historial_producto_id, 
        plan_historial_cliente_id, 
        plan_historial_plan_id, 
        plan_historial_fecha, 
        plan_historial_observacion
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input("plan_historial_producto_id", sql.Numeric, plan_historial_producto_id) 
        .input("plan_historial_cliente_id", sql.Numeric, plan_historial_cliente_id) 
        .input("plan_historial_plan_id", sql.Numeric, plan_historial_plan_id) 
        .input("plan_historial_fecha", sql.VarChar, plan_historial_fecha) 
        .input("plan_historial_observacion", sql.NVarChar, plan_historial_observacion) 
        .query(queries.newPlanMantenimientoHistorial); 
        
        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }     
};

export const updatePlanMantenimientoHistorial = async (req, res) => {
    const { id } = req.params;

    const {
        plan_historial_fecha, 
        plan_historial_observacion 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input("plan_historial_fecha", sql.VarChar, plan_historial_fecha) 
        .input("plan_historial_observacion", sql.NVarChar, plan_historial_observacion)  
        .input('id', sql.BigInt, id)
        .query(queries.updatePlanMantenimientoHistorial); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    }     
};

export const deletePlanMantenimientoHistorial = async (req, res) => {
    const { id } = req.params;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input('id', sql.BigInt, id)
        .query(queries.deletePlanMantenimientoHistorial); 

        res.json({ message: "OK" });
        console.log('CORRECTO')
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    }     
};

export const getPlanMantenimientoHistorialClienteProducto = async (req, res) => {
    const { clienteId, productoId } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('clienteId', clienteId)
        .input('productoId', productoId)
        .query(queries.getPlanMantenimientoHistorialClienteProducto);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

 