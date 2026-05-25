// this app.js is entry point for mock server (testing)
import 'dotenv/config';

import express from "express";

import buildingRouter from "./route/building.js";
import unitRouter from "./route/unit.js";
import residentRouter from "./route/resident.js";
import accountRouter from "./route/account.js";
import authRouter from "./route/auth.js";

import {requireAuth} from "./middleware/auth.js"

const app = express();
app.use(express.json());  // to extract request json

//========= API =========

// public
app.get("/api/health", (request, response) => {
    response.json({
        status: "ok",
    })
});
app.use("/api/building", buildingRouter);
app.use("/api/unit", unitRouter);
app.use("/api/auth", authRouter);

// protected
app.use("/api/resident", requireAuth, residentRouter);
app.use("/api/account", requireAuth, accountRouter);


export default app