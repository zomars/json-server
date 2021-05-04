const jsonServer = require("json-server");
const path = require("path");
const fs = require("fs");

const server = jsonServer.create();

const router = jsonServer.router(path.join(__dirname, "../public/db.json"));
const middlewares = jsonServer.defaults({ readOnly: true });
const port = process.env.PORT || 80;

server.use(middlewares);
server.use("/api", router);

server.listen(port, () => {
  console.log("JSON Server is running");
});

module.exports = server;
