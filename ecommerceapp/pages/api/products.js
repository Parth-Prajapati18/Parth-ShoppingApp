import { connection } from "./lib/data";

export default async function handler(req, res) {
    const query = 'SELECT * FROM `products` ';

    try {
        const rows = await connection.promise().query(query);
        return res.status(200).json({ Message: "Okay", Products: rows[0] });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ Message: "Internal Server Problem" });
    }
}
