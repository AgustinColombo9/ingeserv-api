import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";

export const newTrabajo = async (req, res) => {
    const {
        trabajo_descripcion,  
        trabajo_observacion, 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        const result = await pool.request()  
        .input("trabajo_descripcion", sql.VarChar, trabajo_descripcion) 
        .input("trabajo_observacion", sql.VarChar, trabajo_observacion) 
        .query(queries.newTrabajo); 

        const id = await pool.request() 
            .query(queries.getUltimoTrabajo);

        res.json({ message: "OK", TRABAJOS_ID: id.recordset[0].TRABAJOS_ID });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }     
};

export const updateTrabajo = async (req, res) => {
    const { id } = req.params;

    const {
        trabajo_descripcion,  
        trabajo_observacion, 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input("trabajo_descripcion", sql.VarChar, trabajo_descripcion) 
        .input("trabajo_observacion", sql.VarChar, trabajo_observacion) 
        .input('id', sql.BigInt, id)
        .query(queries.updateTrabajo); 

        res.json({ message: "OK" });
        console.log('CORRECTO')
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    }     
};

export const deleteTrabajo = async (req, res) => {
    const { id } = req.params;

    try { 
        const pool = await getConnection();
        await pool.request()
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.deleteTrabajo); 
        
        res.status(200)
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    } 
};

export const getTrabajoId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getTrabajoId);
        
        res.json(result.recordset[0]);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getTrabajos = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getTrabajos);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

////////////////////////////////////////////////////////////////

export const newTarea = async (req, res) => {
    const {
        tarea_descripcion,  
        tarea_detalle, 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input("tarea_descripcion", sql.VarChar, tarea_descripcion) 
        .input("tarea_detalle", sql.VarChar, tarea_detalle) 
        .query(queries.newTarea); 

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }     
};

export const updateTarea = async (req, res) => {
    const { id } = req.params;

    const {
        tarea_descripcion,  
        tarea_detalle, 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input("tarea_descripcion", sql.VarChar, tarea_descripcion) 
        .input("tarea_detalle", sql.VarChar, tarea_detalle) 
        .input('id', sql.BigInt, id)
        .query(queries.updateTarea); 

        res.json({ message: "OK" });
        console.log('CORRECTO')
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    }     
};

export const deleteTarea = async (req, res) => {
    const { id } = req.params;

    try { 
        const pool = await getConnection();
        await pool.request()
        .request()
        .input('id', sql.BigInt, id)
        .query(queries.deleteTarea); 
        
        res.status(200)
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    } 
};
 
export const getTareaId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getTareaId);
        
        res.json(result.recordset[0]);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getTareas = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getTareas);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const getTareasTrabajo = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.getTareasTrabajo);
        
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    } 
};

export const saveTareasTrabajo = async (req, res) => {
    const detalles = req.body;

    try {
        const pool = await getConnection();

        for (const detalle of detalles) {
            const {
                TRABAJOS_TAREAS_ID, 
                TRABAJOS_TAREAS_TRABAJOS_ID,
                TRABAJOS_DESCRIPCION,
                TRABAJOS_OBSERVACION,
                TRABAJOS_TAREAS_TAREAS_ID,
                TAREAS_DESCRIPCION,
                TAREAS_DETALLE 
            } = detalle;

            console.log('SAVE DETALLE: '+TRABAJOS_TAREAS_TAREAS_ID+ '  -  '+TRABAJOS_TAREAS_TRABAJOS_ID)
            console.log('TAREA: '+TAREAS_DESCRIPCION+'  -  '+TAREAS_DETALLE)

            if (TRABAJOS_TAREAS_TAREAS_ID && TRABAJOS_TAREAS_TAREAS_ID > 0) {
                await pool.request()
                    .input("trabajo_tarea_trabajo_id", sql.Numeric, TRABAJOS_TAREAS_TRABAJOS_ID)
                    .input("trabajo_tarea_tarea_id", sql.Numeric, TRABAJOS_TAREAS_TAREAS_ID)
                    .query(queries.newTareaTrabajo);
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
    }  
}

export const newTareaTrabajo = async (req, res) => {
    const {
        trabajo_tarea_trabajo_id, 
        trabajo_tarea_tarea_id, 
    } = req.body;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input("trabajo_tarea_trabajo_id", sql.Numeric, trabajo_tarea_trabajo_id) 
        .input("trabajo_tarea_tarea_id", sql.Numeric, trabajo_tarea_tarea_id) 
        .query(queries.newTareaTrabajo); 
        
        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }     
};

export const deleteTareaTrabajo = async (req, res) => {
    const { id } = req.params;

    try { 
        const pool = await getConnection(); 
        await pool.request()  
        .input('id', sql.BigInt, id)
        .query(queries.deleteTareaTrabajo); 

        res.json({ message: "OK" });
        console.log('CORRECTO')
    } 
    catch (error) { 
        res.json({ message: error.message });
        console.log('INCORRECTO: '+error.message)
    }     
};