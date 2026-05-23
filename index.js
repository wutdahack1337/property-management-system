import express from "express";

import buildingRouter from "./route/building.js";
import unitRouter from "./route/unit.js";

const HOST = "localhost";
const PORT = 1337;

const app = express();
app.use(express.json()); // to extract json

// API
app.get("/api/health", (request, response) => {
    response.json({
        status: "ok",
    })
});

app.use("/api/building", buildingRouter);

app.use("/api/unit", unitRouter);


const server = app.listen(PORT, HOST, () => {
    console.log("Server is running...");
});