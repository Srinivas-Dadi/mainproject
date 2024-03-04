import { createPool } from "mysql";

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password : "",
    database: "dbname",
    connectionLimit: 10
})

export default pool;


