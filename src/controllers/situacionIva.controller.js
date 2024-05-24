import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";

export const getSituacionesIVA = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getSituacionesIVA);

        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};