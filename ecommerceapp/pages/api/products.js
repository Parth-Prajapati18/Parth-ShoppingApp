import { connection } from "./lib/data";

export default async function handler (req, res) {

    const query = 'SELECT * FROM `products` ';

    try {
        const rows = await connection.promise().query(query)
        return res.status(200).json({Message: "Okay", Products : rows[0]})
    }  catch {
        return res.status(401).json({Message : "Internal Server Problem"})
    }

}