import { Router } from "express";

import database from "../database.js";

const router = Router();

router.post("/", (request, response) => {
    const { buildingId, name, status } = request.body;

    const result = database.prepare("INSERT INTO unit (buildingId, name, status) VALUES (?, ?, ?)").run(buildingId, name, status);
    const responseContent = database.prepare("SELECT id, buildingId, name, status FROM unit WHERE id = ?").get(result.lastInsertRowid);
    response.status(200).json(responseContent);
});

router.get("/", (request, response) => {
    const responseContent = database.prepare("SELECT id, buildingId, name, status FROM unit").all();
    response.json(responseContent);
});

router.patch("/:id", (request, response) => {
    const id = request.params.id;
    const { buildingId, status} = request.body;

    if (buildingId !== undefined) {
        database.prepare("UPDATE unit SET buildingId = ? WHERE id = ?").run(buildingId, id);
    }
    if (name !== undefined) {
        database.prepare("UPDATE unit SET name = ? WHERE id = ?").run(name, id);
    }
    if (status !== undefined) { 
        database.prepare("UPDATE unit SET status = ? WHERE id = ?").run(status, id);
    }

    const responseContent = database.prepare("SELECT id, buildingId, name, status FROM unit WHERE id = ?").get(id);
    response.json(responseContent);
});


router.delete("/:id", (request, response) => {
    const id = request.params.id;
    database.prepare("DELETE FROM unit WHERE id = ?").run(id);
    response.status(204).send();
});



export default router;