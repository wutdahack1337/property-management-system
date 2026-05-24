// this app.js is entry point for mock server (testing)

import express from "express";

import buildingRouter from "./route/building.js";
import unitRouter from "./route/unit.js";
import residentRouter from "./route/resident.js";
import accountRouter from "./route/account.js";

const app = express();
app.use(express.json());  // to extract request json

//========= API =========
app.get("/api/health", (request, response) => {
    response.json({
        status: "ok",
    })
});

app.use("/api/building", buildingRouter);

app.use("/api/unit", unitRouter);

app.use("/api/resident", residentRouter);

app.use("/api/account", accountRouter);

export default app