
import database from "../database.js";

export async function createResident(unitId, name, phoneNumber){
    const result = database.prepare("INSERT INTO resident (unitId, name, phoneNumber) VALUES (?, ?, ?)").run(unitId, name, phoneNumber);
    return await database.prepare("SELECT id, unitId, name, phoneNumber FROM resident WHERE id = ?").get(result.lastInsertRowid);
}

export async function getResident(){
    return await database.prepare("SELECT id, unitId, name, phoneNumber FROM resident").all();
}

export async function updateResident(id, unitId, name, phoneNumber){
    if (unitId !== undefined) {
        await database.prepare("UPDATE resident SET unitId = ? WHERE id = ?").run(unitId, id);
    }
    if (name !== undefined) {
        await database.prepare("UPDATE resident SET name = ? WHERE id = ?").run(name, id);
    }
    if (phoneNumber !== undefined) {
        await database.prepare("UPDATE resident SET phoneNumber = ? WHERE id = ?").run(phoneNumber, id);
    }
    
    return await database.prepare("SELECT id, unitId, name, phoneNumber FROM resident WHERE id = ?").get(id);
}

export async function deleteResident(id){
    return await database.prepare("DELETE FROM resident WHERE id = ?").run(id);
}