import express from "express";

const HOST = "localhost";
const PORT = 1337;

const app = express();

// API
app.get("/api/health", (request, response) => {
    response.json({
        status: "ok",
    })
});


const server = app.listen(PORT, HOST, () => {
    console.log("Server is starting...");
});