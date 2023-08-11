import { connection } from "./lib/data";
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            return res.status(200).json({ Message: "GET Request Success" });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ Message: "GET Request Error" });
        }
    } else if (req.method === 'POST') {
        try {
            const { firstName, lastName, email, password, aptName, streetName, city, province, country, postalCode, mobileNumber, acceptTerms } = req.body;
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            await connection.promise().query(
                "INSERT INTO user_details (firstName, lastName, email, mobileNumber, password, aptName, streetName, city, province, country, postalCode, acceptTerm) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                [firstName, lastName, email, mobileNumber, hashedPassword, aptName, streetName, city, province, country, postalCode, acceptTerms]
            );

            return res.status(200).json({ Message: "POST Request Success" });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ Message: "POST Request SQL Error" });
        }
    } else {
        return res.status(405).json({ Message: "Method Not Allowed" });
    }
}
