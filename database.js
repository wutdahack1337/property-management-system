import Database from "better-sqlite3";


const database = new Database("database.db");

database.exec(`
    CREATE TABLE IF NOT EXISTS building (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE
    );
`);

export default database
