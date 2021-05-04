const jsonServer = require("json-server");
const { tmpdir } = require("os");
const { join } = require("path");

const pathToFile = join(tmpdir(), "db.json");
const server = jsonServer.create();
console.log(`pathToFile`, pathToFile);
const router = jsonServer.router(pathToFile);
const middlewares = jsonServer.defaults({ readOnly: true });
const port = process.env.PORT || 80;

server.use(middlewares);
server.use(router);

module.exports = server;
