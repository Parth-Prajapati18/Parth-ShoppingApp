import { pool } from "./lib/data";

export default async function test (req,res) {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM `user_details`');
    connection.end()
    return res.status(200).json(rows); 
}