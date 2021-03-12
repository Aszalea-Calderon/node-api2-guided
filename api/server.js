// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
const express = require("express");

const server = express();
const adoptRoute = require("./adopters/adopters-router.js");
const dogsRouter = require("./dogs/dogs-router.js");

server.use(express.json());
server.use("/api/adopters", adoptRoute);
server.use("/api/dogs", dogsRouter);

// OTHER ENDPOINTS
// OTHER ENDPOINTS
// OTHER ENDPOINTS
server.get("/", (req, res) => {
  res.send(`
    <h2>Lambda Shelter API</h>
    <p>Welcome to the Lambda Shelter API</p>
  `);
});

module.exports = server;
