import pg from 'pg'
import "dotenv/config"

import { Student } from '../lib/types.js'

const setupDB = async () => {
    const { Pool } = pg
    const pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASS,
        port: parseInt(process.env.DB_PORT as string),
    })
    await pool.connect();

    try {
        const res = await pool.query('SELECT $1::text as message ;', ['Database connected!']) 
        console.log(res.rows[0].message) // Hello world!
    } catch (err) {
        console.error(err);
    }

    return pool
}

const pool = setupDB()

export default pool;
