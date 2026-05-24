import { Router } from "express";

import { createAccount, getAccount, updateAccount, deleteAccount } from "../controller/account.js";

const router = Router();

router.post("/", createAccount);
router.get("/", getAccount);
router.patch("/:id", updateAccount);
router.delete("/:id", deleteAccount);


export default router;