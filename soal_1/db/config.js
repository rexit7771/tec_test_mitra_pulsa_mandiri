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


async function connectDB() {
    try {
        await sql.connect(config);
        console.log("Database Connected");
    } catch (error) {
        console.error(error);
    }
}
connectDB();


module.exports = { sql }