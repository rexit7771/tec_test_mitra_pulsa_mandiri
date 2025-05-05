const { pool } = require("../db/config");


async function migrateCategories() {
    try {

        let query =
            `CREATE TABLE categories(
            id int IDENTITY(1,1) PRIMARY KEY,
            name varchar(255) NOT NULL
        );`
        await pool.request().query(query);
        console.log("Table Categories has been migrated");
        migrateCategories();
    } catch (error) {
        console.error(error);
    }
}
migrateCategories();