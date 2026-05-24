import Database from "better-sqlite3";


const database = new Database(process.env.NODE_ENV === "test" ? ":memory:" : "database.db");
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

// resident
database.exec(`
    CREATE TABLE IF NOT EXISTS resident (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        unitId INTEGER,
        name TEXT NOT NULL,
        phoneNumber TEXT NOT NULL,
        FOREIGN KEY (unitId) REFERENCES unit(id)
    );
`);

// account
database.exec(`
    CREATE TABLE IF NOT EXISTS account (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        residentId INTEGER UNIQUE,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        FOREIGN KEY (residentId) REFERENCES resident(id)
    )    
`);


export default database
