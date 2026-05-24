
import database from "../database.js";


export async function createUnit(buildingId, name, status) {
    try {
        const result = await database.prepare("INSERT INTO unit (buildingId, name, status) VALUES (?, ?, ?)").run(buildingId, name, status);
        return await database.prepare("SELECT id, buildingId, name, status FROM unit WHERE id = ?").get(result.lastInsertRowid);
    } catch (error) {
        // next(error);
    }
}


export async function getUnit() {
    try {
        return await database.prepare("SELECT id, buildingId, name, status FROM unit").all();
    } catch (error) {
        // next(error);
    }
}

export async function updateUnit(id, buidlingId, name, status) {
    try {
        if (buildingId !== undefined) {
            await database.prepare("UPDATE unit SET buildingId = ? WHERE id = ?").run(buildingId, id);
        }
        if (name !== undefined) {
            await database.prepare("UPDATE unit SET name = ? WHERE id = ?").run(name, id);
        }
        if (status !== undefined) { 
            await database.prepare("UPDATE unit SET status = ? WHERE id = ?").run(status, id);
        }

        return await database.prepare("SELECT id, buildingId, name, status FROM unit WHERE id = ?").get(id);
    } catch (error) {
        next(error);
    }
}

export async function delelteUnit(id) {
    try {
        await database.prepare("DELETE FROM unit WHERE id = ?").run(id);
    } catch (error) {
        // next(error);
    }
}