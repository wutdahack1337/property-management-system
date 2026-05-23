import { Router } from "express";

import database from "../database.js";

const router = Router();

router.post("/", (request, response) => {
    const { buildingId, status } = request.body;

    const result = database.prepare("INSERT INTO unit (buildingId, status) VALUES (?, ?)").run(buildingId, status);
    const responseContent = database.prepare("SELECT id, buildingId, status FROM unit WHERE id = ?").get(result.lastInsertRowid);
    response.status(200).json(responseContent);
});

router.get("/", (request, response) => {
    const responseContent = database.prepare("SELECT id, buildingId, status FROM unit").all();
    response.json(responseContent);
});

router.patch("/:id", (request, response) => {
    // const id = request.params.id;
    // const { buildingId, status} = request.body;
});


router.delete("/", (request, response) => {

});



export default router;