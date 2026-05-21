import { Router } from "express";

import database from "../database.js";

const router = Router();

router.post("/", (request, response) => {
    const { name } = request.body;
    const result = database.prepare("INSERT INTO building (name) VALUES (?)").run(name);
    const responseContent = database.prepare("SELECT * FROM building WHERE id = ?").get(result.lastInsertRowid);
    response.status(201).json(responseContent);
});

router.get("/", (_, response) => {
    const responseContent = database.prepare("SELECT * FROM building").all();
    response.status(200).json(responseContent);
});

router.patch("/:id", (request, response) => {
    const id = request.params.id;
    const { name } = request.body;
    const result = database.prepare("UPDATE building SET name = ? WHERE id = ?").run(name, id);
    const responseContent = database.prepare("SELECT * FROM building WHERE id = ?").get(id);
    response.status(200).json(responseContent).send();
});

router.delete("/:id", (request, response) => {
    const id = request.params.id;
    const _ = database.prepare("DELETE FROM building WHERE id = ?").run(id);
    response.status(204).send();
});



export default router