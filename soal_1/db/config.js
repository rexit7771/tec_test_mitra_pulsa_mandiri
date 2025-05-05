require('dotenv').config();
const sql = require('mssql')

let config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    port: +process.env.DB_PORT,
    options: {
        trustServerCertificate: true
    }
};

const pool = new sql.ConnectionPool(config);


pool.connect()
    .then(() => console.log("Database connected"))
    .catch((err) => console.error("Error ==> ", err)
    );

module.exports = { pool }