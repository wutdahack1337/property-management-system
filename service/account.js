import database from "../database.js";


export async function createAccount(residentId, username, password) {
    const result = database.prepare("INSERT INTO account (residentId, username, password) VALUES (?, ?, ?)").run(residentId, username, password);
    return await database.prepare("SELECT id, residentId, username FROM account WHERE id = ?").get(result.lastInsertRowid);
}

export async function getAccount() {
    return await database.prepare("SELECT id, residentId, username FROM account").all();
}


export async function updateAccount(id, residentId, username, password) {
    if (residentId !== undefined) {
        database.prepare("UPDATE account SET residentId = ? WHERE id = ?").run(residentId, id);
    }
    if (username !== undefined) {
        database.prepare("UPDATE account SET username = ? WHERE id = ?").run(username, id);
    }
    if (password !== undefined) { 
        database.prepare("UPDATE account SET password = ? WHERE id = ?").run(password, id);
    }
    return await database.prepare("SELECT id, residentId, username FROM account WHERE id = ?").get(id);
}

export async function deleteAccount(id) {
    return await database.prepare("DELETE FROM account WHERE id = ?").run(id);
}