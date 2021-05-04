const jsonServer = require("json-server");
const { tmpdir } = require("os");
const { join } = require("path");

const pathToFile = join(tmpdir(), "db.json");
const server = jsonServer.create();
const router = jsonServer.router(pathToFile);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3099;

server.use(middlewares);
server.use(router);

server.listen(port);
