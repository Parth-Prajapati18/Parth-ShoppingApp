import { connection } from "./lib/data";
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  try {
    const { email, password } = req.body;

    const [rows] = await connection.promise().query('SELECT password FROM `user_details` WHERE email = ?', [email]);

    if (rows.length === 0) {
      return res.status(401).json({ Message: "User not found" });
    }

    const hash = rows[0].password;
    const result = await bcrypt.compare(password, hash);

    if (result) {
      return res.status(200).json({ Message: "Login Works" });
    } else {
      return res.status(200).json({ Message: "Login doesn't work" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ Message: "Internal Server Error" });
  }
}
