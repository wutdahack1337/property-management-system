import { Router } from "express";

import database from "../database.js";

const router = Router();

router.post("/", (request, response) => {
    const { residentId, username, password } = request.body;

    const result = database.prepare("INSERT INTO account (residentId, username, password) VALUES (?, ?, ?)").run(residentId, username, password);
    const responseContent = database.prepare("SELECT id, residentId, username FROM account WHERE id = ?").get(result.lastInsertRowid);
    response.status(201).json(responseContent);
});

router.get("/", (request, response) => {
    const responseContent = database.prepare("SELECT id, residentId, username FROM account").all();
    response.status(200).json(responseContent);
});

router.patch("/:id", (request, response) => {
    const id = request.params.id;
    const { residentId, username, password } = request.body;

    if (residentId !== undefined) {
        database.prepare("UPDATE account SET residentId = ? WHERE id = ?").run(residentId, id);
    }
    if (username !== undefined) {
        database.prepare("UPDATE account SET username = ? WHERE id = ?").run(username, id);
    }
    if (password !== undefined) { 
        database.prepare("UPDATE account SET password = ? WHERE id = ?").run(password, id);
    }
    
    const responseContent = database.prepare("SELECT id, residentId, username FROM account WHERE id = ?").get(id);
    response.status(200).json(responseContent);
});

router.delete("/:id", (request, response) => {
    const id = request.params.id; 
    database.prepare("DELETE FROM account WHERE id = ?").run(id);
    response.status(204).send();
});


export default router;