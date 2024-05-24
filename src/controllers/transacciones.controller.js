import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";

export const getTransacciones = async (req, res) => {
    try { 
        //const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;
        /*
        const generarSort = () => {
            const sortParsed = JSON.parse(sort);
            const sortFormatted = {
                [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
            };

            return sortFormatted;
        }
        const sortFormatted = Boolean (sort) ? generarSort() : {};
        */
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getTransacciones);

        /*

        ERROR EN EL FIND
        
        */ 
/*
        console.log(`page: ${page} , pageSize: ${pageSize}, sort: ${sort}, search: ${search} `)
        console.log("FIND")
        const transacciones = await result.find({
            $or: [
                { PRODUCTOTRANSACCION_COSTO: { $regex: new RegExp(search, "i") } }, 
                { PRODUCTOTRANSACCION_ID: { $regex: new RegExp(search, "i") } } 
            ],
        })
        .sort(sortFormatted)
        .skip(page * pageSize)
        .limit(pageSize);
        console.log(transacciones)
        /*
        const total = await result.countDocuments({
            name: { $regex: search, $options: "i" },
        });*/
        //const total = await result.recordset.length; 
        
        //res.status(200).json(JSON.Parse(result)); 
        //res.status(200).json({transacciones, total});
        res.json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};