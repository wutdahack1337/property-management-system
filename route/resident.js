import { Router } from "express";

import database from "../database.js";

const router = Router();

router.post("/", (request, response) => {
    const {unitId, name, phoneNumber} = request.body;

    const result = database.prepare("INSERT INTO resident (unitId, name, phoneNumber) VALUES (?, ?, ?)").run(unitId, name, phoneNumber);
    const responseContent = database.prepare("SELECT id, unitId, name, phoneNumber FROM resident WHERE id = ?").get(result.lastInsertRowid);
    response.json(responseContent);
});

router.get("/", (request, response) => {
    const responseContent = database.prepare("SELECT id, unitId, name, phoneNumber FROM resident").all();
    response.json(responseContent);
});


router.patch("/:id", (request, response) => {
    const id = request.params.id;
    const {unitId, name, phoneNumber} = request.body;

    if (unitId !== undefined) {
        database.prepare("UPDATE resident SET unitId = ? WHERE id = ?").run(unitId, id);
    }
    if (name !== undefined) {
        database.prepare("UPDATE resident SET name = ? WHERE id = ?").run(name, id);
    }
    if (phoneNumber !== undefined) {
        database.prepare("UPDATE resident SET phoneNumber = ? WHERE id = ?").run(phoneNumber, id);
    }
    
    const responseContent = database.prepare("SELECT id, unitId, name, phoneNumber FROM resident WHERE id = ?").get(id);
    response.json(responseContent);
});


router.delete("/:id", (request, response) => {
    const id = request.params.id;
    database.prepare("DELETE FROM resident WHERE id = ?").run(id);
    response.status(204).send();
});


export default router;