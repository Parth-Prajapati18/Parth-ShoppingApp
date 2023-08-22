import { connection } from "./lib/data";
import bcrypt from 'bcrypt';
import jwt  from "jsonwebtoken";

export default async function handler(req, res) {
  try {
    const { email, password } = req.body;

    const [rows] = await connection.promise().query('SELECT * FROM `user_details` WHERE email = ?', [email]);

    if (rows.length === 0) {
      return res.status(401).json({ Message: "User not found" });
    }

    const hash = rows[0].password;
    const result = await bcrypt.compare(password, hash);

    if (result) {
      const token = jwt.sign({user: rows[0]}, 'eyJSb2xlIjoiQWRta1ZXIiLCJVc2VybmFtZSI6W4iLCJJ3NIkphdmFJblVzZSIsImV4cCI6MTY5MTk0OD', { expiresIn: '1h' })
      connection.end()
      return res.status(200).json({Message: true, user: rows[0], token: token });
    } else {
      connection.end()
      return res.status(200).json({Message: false });
    }
  } catch (error) {
    console.error(error);
    connection.end()
    return res.status(500).json({ Message: "Internal Server Error" });
  }
}
