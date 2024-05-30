import sql from 'mssql';
import config from '../config.js';

/* 

const configDB1 = {
  user: 'usuario',
  password: 'contraseña',
  server: 'localhost',
  database: 'nombre_basedatos_1',
  options: {
    encrypt: true // Si estás utilizando Azure SQL, activa esta opción
  }
};

// Configuración de conexión a la segunda base de datos
const configDB2 = {
  user: 'usuario',
  password: 'contraseña',
  server: 'localhost',
  database: 'nombre_basedatos_2',
  options: {
    encrypt: true // Si estás utilizando Azure SQL, activa esta opción
  }
};

await mssql.connect(configDB1);

*/

const dbSettings = {
    user: "admin", //config.dbUser, 
    password: "Carp12345", //config.dbPassword, 
    //server: "localhost", //config.dbServer,
    server: 'gtinformatica.ddns.net',
    database: "INGESERV", //config.dbDatabase, 
    options: {
        encrypt: true, 
        trustServerCertificate: true, 
    }    
};

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings);
        //const result = await pool.request().query("SELECT * FROM USUARIO");    
        return pool;
    }
    catch (error){
        console.log(error);
    }    
};

export {sql};