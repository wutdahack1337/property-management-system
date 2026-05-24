import { Router } from "express";

import { createResident, getResident, updateResident, deleteResident } from "../controller/resident.js"


const router = Router();

router.post("/", createResident);

router.get("/", getResident);

router.patch("/:id", updateResident);

router.delete("/:id", deleteResident);


export default router;