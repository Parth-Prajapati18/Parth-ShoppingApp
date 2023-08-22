import { connection } from "./lib/data";

export default async function test (req,res) {
    const [rows] = await connection.promise().query('SELECT * FROM `user_details`');
    connection.end()
    return res.status(200).json(rows); 
}