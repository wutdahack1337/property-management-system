import Database from "better-sqlite3";


const database = new Database("database.db");
database.pragma("foreign_keys = ON"); // enforce referential integrity

// building
database.exec(`
    CREATE TABLE IF NOT EXISTS building (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE
    );
`);

// unit
database.exec(`
    CREATE TABLE IF NOT EXISTS unit (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        buildingId INTEGER,
        name TEXT NOT NULL UNIQUE,
        status TEXT NOT NULL,
        FOREIGN KEY (buildingId) REFERENCES building(id)
    );
`);

export default database
