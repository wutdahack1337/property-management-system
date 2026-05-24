import Router from "express";

import database from "../database.js";

import { createBuilding, getBuilding, updateBuilding, deleteBuilding} from "../controller/building.js"

const router = Router();

router.post("/", createBuilding);

router.get("/", getBuilding);

router.patch("/:id", updateBuilding);

router.delete("/:id", deleteBuilding);

export default router