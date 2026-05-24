
import database from "../database.js";


export async function createUnit(buildingId, name, status) {
    const result = await database.prepare("INSERT INTO unit (buildingId, name, status) VALUES (?, ?, ?)").run(buildingId, name, status);
    return await database.prepare("SELECT id, buildingId, name, status FROM unit WHERE id = ?").get(result.lastInsertRowid);
}


export async function getUnit() {
    return await database.prepare("SELECT id, buildingId, name, status FROM unit").all();
}

export async function updateUnit(id, buildingId, name, status) {
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
}

export async function deleteUnit(id) {
    await database.prepare("DELETE FROM unit WHERE id = ?").run(id);
}