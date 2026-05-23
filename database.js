import Database from "better-sqlite3";


const database = new Database("database.db");
database.pragma("foreign_keys = ON"); // enforce referential integrity

database.exec(`
    CREATE TABLE IF NOT EXISTS building (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE
    );
`);

database.exec(`
    CREATE TABLE IF NOT EXISTS unit (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        buildingId INTEGER,
        status TEXT NOT NULL,
        FOREIGN KEY (buildingId) REFERENCES building(id)
    );
`);

export default database
