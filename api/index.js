const faker = require("faker");
const jsonServer = require("json-server");
const path = require("path");
const fs = require("fs");
const { tmpdir } = require("os");

let database = { employers: [] };
const threshold = 1000;

for (let i = 1; i <= threshold; i++) {
  database.employers.push({
    id: i,
    name: faker.name.firstName() + " " + faker.name.lastName(),
    uuid: faker.datatype.uuid(),
    fname: faker.name.firstName(),
    lname: faker.name.lastName(),
    location: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zip: faker.address.zipCode(),
    country: "US",
    phone: faker.phone.phoneNumber(),
    logo: faker.internet.avatar(),
    description:
      "Plumbing, Heating and Air conditioning Contractor serving Fairfield County",
    head_count: faker.datatype.number(),
    is_verified: faker.datatype.boolean(),
  });
}

const pathToFile = path.join(tmpdir(), "db.json");
const server = jsonServer.create();
console.log(`pathToFile`, pathToFile);
const router = jsonServer.router(database);
const middlewares = jsonServer.defaults({ readOnly: true });
const port = process.env.PORT || 80;
server.use(middlewares);
server.use("/api", router);

server.listen(port, () => {
  console.log("JSON Server is running");
});

module.exports = server;
