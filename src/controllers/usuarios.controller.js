import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";
const jwt = require ("jsonwebtoken");

const TOKEN_KEY = "x4TvnErxRETbVcqal5dqMI115eNlp5y"

export const veriFyToken = (req, res, next) => {
    const authHeader = req.header["authorization"];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(authHeader);
    if(token ==null) {
        return res.status(401).send ("Token requerido");
    }
    else {
        jwt.verify(token, TOKEN_KEY, (err, user) => {
            if (err) return res.status(403).send ("Token invalido");
            console.log(user);
            req.user = user;
            next();
        });
    }
};

export const loginUsuario = async (req, res) => {
  /*  const { dni, password } = req.body;
    if( dni == null || password == null ) {
        res.status(400).json({msg: 'Bad Request, please fill all fields'});
    }

    console.log('USUARIO LOGUEO ENFPOINT: '+dni+'   -   '+password)

    try {
        const pool = await getConnection();    
        const result = await pool.request()
            .input("USUARIO_DNI", sql.VarChar, dni)
            .input("USUARIO_PASSWORD", sql.VarChar, password)
            .query(queries.loginUsuario);
    
        if (result.recordset[0] != null) {
            const datos = {
                usuario_id: result.recordset[0].USUARIO_ID, 
                usuario_dni: result.recordset[0].USUARIO_DNI, 
                usuario_username: result.recordset[0].USUARIO_USERNAME, 
                usuario_password: result.recordset[0].USUARIO_PASSWORD, 
                usuario_tipo_id: result.recordset[0].USUARIO_TIPO_ID, 
                usuario_status: result.recordset[0].USUARIO_STATUS, 
                usuario_cliente_id: result.recordset[0].CLIENTE_ID, 
                usuario_cliente_razon_social: result.recordset[0].CLIENTE_RAZON_SOCIAL, 
                usuario_cliente_celular: result.recordset[0].CLIENTE_CELULAR, 
                usuario_cliente_estado_id: result.recordset[0].CLIENTE_ESTADO_ID, 
            }
    
           const token = jwt.sign(
                {usuario_id: datos.usuario_id, 
                usuario_dni: datos.usuario_dni, 
                usuario_username: datos.usuario_username, 
                usuario_password: datos.usuario_password, 
                usuario_tipo_id: datos.usuario_tipo_id, 
                usuario_status: datos.usuario_status, 
                usuario_cliente_id: datos.usuario_cliente_id, 
                usuario_cliente_razon_social: datos.usuario_cliente_razon_social, 
                usuario_cliente_celular: datos.usuario_cliente_celular, 
                usuario_cliente_estado_id: datos.usuario_cliente_estado_id}, 
                TOKEN_KEY,
                {expiresIn: "2h"}
           );
            let nDatos = {...datos, token};

            res.status(200).json(nDatos);
            //return res.status(200).json({msg: 'Acceso correcto.'});
        }
        else {
            //res.status(400).json({status: '400'});
            const datos = {
                usuario_id: 0, 
                usuario_dni: "", 
                usuario_username: "", 
                usuario_password: "", 
                usuario_tipo_id: 0, 
                usuario_status: false, 
                usuario_cliente_id: 0, 
                usuario_cliente_razon_social: "", 
                usuario_cliente_celular: "", 
                usuario_cliente_estado_id: 0, 
            }
            res.status(200).json(datos);
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    */
    const { email, password } = req.body;
    if( email == null || password == null ) {
        res.status(400).json({msg: 'Bad Request, please fill all fields'});
    }

    console.log('PARAMS: '+email + '  -  ' +password)

    try {
        const pool = await getConnection();    
        const result = await pool.request()
            .input("USUARIO_EMAIL", sql.VarChar, email)
            .input("USUARIO_PASSWORD", sql.VarChar, password)
            .query(queries.loginUsuario);
    
        if (result.recordset[0] != null) {
            const datos = {
                usuario_id: result.recordset[0].USUARIO_ID, 
                usuario_email: result.recordset[0].USUARIO_EMAIL, 
                usuario_dni: result.recordset[0].USUARIO_DNI, 
                usuario_username: result.recordset[0].USUARIO_USERNAME, 
                usuario_password: result.recordset[0].USUARIO_PASSWORD, 
                usuario_tipo_id: result.recordset[0].USUARIO_TIPO_ID, 
                usuario_status: result.recordset[0].USUARIO_STATUS, 
                usuario_cliente_id: result.recordset[0].CLIENTE_ID, 
                usuario_cliente_razon_social: result.recordset[0].CLIENTE_RAZON_SOCIAL, 
                usuario_cliente_celular: result.recordset[0].CLIENTE_CELULAR, 
                usuario_cliente_email: result.recordset[0].USUARIO_EMAIL, 
                usuario_cliente_estado_id: result.recordset[0].CLIENTE_ESTADO_ID, 
                usuario_token_notificacion: result.recordset[0].USUARIO_TOKEN_NOTIFICACION 
            }
    
           const token = jwt.sign(
                {usuario_id: datos.usuario_id, 
                usuario_email: datos.usuario_email, 
                usuario_dni: datos.usuario_dni, 
                usuario_username: datos.usuario_username, 
                usuario_password: datos.usuario_password, 
                usuario_tipo_id: datos.usuario_tipo_id, 
                usuario_status: datos.usuario_status, 
                usuario_cliente_id: datos.usuario_cliente_id, 
                usuario_cliente_razon_social: datos.usuario_cliente_razon_social, 
                usuario_cliente_celular: datos.usuario_cliente_celular, 
                usuario_cliente_email: datos.usuario_email, 
                usuario_cliente_estado_id: datos.usuario_cliente_estado_id, 
                usuario_token_notificacion: datos.usuario_token_notificacion}, 
                TOKEN_KEY,
                {expiresIn: "2h"}
           );
            let nDatos = {...datos, token};

            res.status(200).json(nDatos);
            //return res.status(200).json({msg: 'Acceso correcto.'});
        }
        else {
            //res.status(400).json({status: '400'});
            const datos = {
                usuario_id: 0, 
                usuario_email: "", 
                usuario_dni: "", 
                usuario_username: "", 
                usuario_password: "", 
                usuario_tipo_id: 0, 
                usuario_status: false, 
                usuario_cliente_id: 0, 
                usuario_cliente_razon_social: "", 
                usuario_cliente_celular: "", 
                usuario_cliente_email: "", 
                usuario_cliente_estado_id: 0, 
                usuario_token_notificacion: ""
            }
            res.status(200).json(datos);
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getUsuarios = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getUsuarios);

        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getUsuarioTipos = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getUsuarioTipos);

        res.json(result.recordset);
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const newUsuario = async (req, res) => {
    const { usuario_dni, usuario_username, usuario_password } = req.body;
    let { usuario_status } = req.body;
    let { usuario_tipo_id } = req.body;

    if( usuario_dni == null || usuario_username == null || usuario_password == null ) {
        return res.status(400).json({msg: 'Bad Request, please fill all fields'});
    }

    if ( usuario_tipo_id == 0) usuario_tipo_id = 4; // paciente por default

    if ( usuario_status == null )  usuario_status = true;

    try {
        const pool = await getConnection();    
        await pool.request()
        .input("USUARIO_DNI", sql.VarChar, usuario_dni)
        .input("USUARIO_NOMBRE", sql.VarChar, usuario_nombre)
        .input("USUARIO_PASSWORD", sql.VarChar, usuario_password)
        .input("USUARIO_TIPO_ID", sql.Numeric, usuario_tipo_id)
        .input("USUARIO_STATUS", sql.Bit, usuario_status) 
        .query(queries.newUsuario); 
    } 
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
    res.json({ usuario_nombre, usuario_password });
};

export const getUsuarioById = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool
    .request()
    .input('id', id)
    .query(queries.getUsuarioById);

    res.send(result.recordset[0]);
};

export const deleteUsuarioById = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool
    .request()
    .input('id', id)
    .query(queries.deleteUsuarioById);

    res.sendStatus(204);
};

export const getTotalUsuarios = async (req, res) => { 
    const pool = await getConnection();
    const result = await pool
    .request()
    .query(queries.getTotalUsuarios);

    res.json(result.recordset[0]['']);
};

export const updateUsuarioById = async (req, res) => {
    const { usuario_nombre, usuario_dni, usuario_password, usuario_tipo_id, usuario_status } = req.body;
    const { id } = req.params;
    
    if( usuario_nombre == null || usuario_dni == null || usuario_password == null ) {
        return res.status(400).json({msg: 'Bad Request, please fill all fields'});
    }

    if ( usuario_tipo_id == 0) usuario_tipo_id = 4; // paciente por default

    if ( usuario_status == null )  usuario_status = true;

    const pool = await getConnection();
    await pool.request()
        .input('usuario_dni', sql.VarChar, usuario_dni)
        .input('usuario_nombre', sql.VarChar, usuario_nombre)
        .input('usuario_password', sql.VarChar, usuario_password)
        .input('usuario_tipo_id', sql.Numeric, usuario_tipo_id)
        .input('usuario_status', sql.Bit, usuario_status)
        .input('id', sql.BigInt, id)
        .query(queries.updateUsuarioById);

    res.json({ usuario_nombre, usuario_dni, usuario_password });
};

export const updateIngreso = async (req, res) => {
    const { id } = req.params;
    const { usuario_ingreso, usuario_ultimo_ingreso } = req.body;

    try {
        const pool = await getConnection();    
        await pool.request()
        .input("usuario_ingreso", sql.Bit, usuario_ingreso)
        .input("usuario_ultimo_ingreso", sql.Numeric, usuario_ultimo_ingreso)
        .input("id", sql.Numeric, id)
        .query(queries.updateIngreso); 
    } 
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
    res.json({ usuario_nombre, usuario_password })
}

export const getDashboardEstadisticas = async (req, res) => {
    try{
        const currentMonth = "November";
        const currentYear = 2023;
        const currentDay = "01/01/2023"

        const pool = await getConnection();

        /* Recent Transactions */
        const transactions = await Transaction.find()
            .limit(50)
            .sort({ createdOn: -1 });

        /* Overall Stats */
        const overallStat = await OverallStat.find({ year: currentYear });

        const {
            totalCustomers,
            yearlyTotalSoldUnits,
            yearlySalesTotal,
            monthlyData,
            salesByCategory,
        } = overallStat[0];

        const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
            return month === currentMonth;
        });

        const todayStats = overallStat[0].dailyData.find(({ date }) => {
            return date === currentDay;
        });

        res.status(200).json({
            totalCustomers,
            yearlyTotalSoldUnits,
            yearlySalesTotal,
            monthlyData,
            salesByCategory,
            thisMonthStats,
            todayStats,
            transactions,
        });
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getRepositories = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getRepositories);

        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
}