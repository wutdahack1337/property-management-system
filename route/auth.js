import { Router } from "express";

import { createAccessToken } from "../controller/auth.js";

const router = Router();

router.post("/login", createAccessToken);


export default router;