// this index.js is entry point for real server

import app from "./app.js";

const HOST = "localhost";
const PORT = 1337;

app.listen(PORT, HOST, () => {
    console.log("Server is running...");
});