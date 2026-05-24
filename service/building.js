import database from "../database.js";

export async function createBuilding(name) {
    const result = await database.prepare("INSERT INTO building (name) VALUES (?)").run(name);
    return await database.prepare("SELECT id, name FROM building WHERE id = ?").get(result.lastInsertRowid);
} 

export async function getBuilding(){
    return await database.prepare("SELECT id, name FROM building").all();
}

export async function updateBuilding(id, name){
    const result = await database.prepare("UPDATE building SET name = ? WHERE id = ?").run(name, id);
    return database.prepare("SELECT id, name FROM building WHERE id = ?").get(id);
}

export async function deleteBuilding(id){
    await database.prepare("DELETE FROM building WHERE id = ?").run(id);
}