import { Router } from "express";

import {createUnit, getUnit, updateUnit, deleteUnit} from "../controller/unit.js";

const router = Router();

router.post("/", createUnit);

router.get("/", getUnit);

router.patch("/:id", updateUnit);

router.delete("/:id", deleteUnit);

export default router;