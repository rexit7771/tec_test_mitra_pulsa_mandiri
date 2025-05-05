const { pool } = require("../db/config");

async function migrateProducts() {
    try {
        let query =
            `CREATE TABLE products(
        id int IDENTITY(1,1) PRIMARY KEY NOT NULL,
        name varchar(255) NOT NULL,
        price decimal NOT NULL,
        stock int NOT NULL,
        category_id int 
        CONSTRAINT Fk_Products_Categories
        FOREIGN KEY REFERENCES categories(id) 
        ON DELETE CASCADE
    );`
        await pool.request().query(query);
        console.log('Table Product has been migrated');
    } catch (error) {
        console.error(error);
    }
}
migrateProducts();