import { pool } from "../models/db.js";

export const getInsercion = async (req, res) => {
    const { usuario, password } = req.body;
    const query = 'INSERT INTO Cliente (Nombre, Contraseña) VALUES (?, ?)';
    await pool.query(query, [usuario, password]);
    res.send('User registered successfully');
};
