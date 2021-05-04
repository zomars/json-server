const faker = require("faker");
const { tmpdir } = require("os");
const fs = require("fs");
const { join } = require("path");

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

const pathToFile = join(__dirname, "public", "db.json");

fs.writeFile(pathToFile, JSON.stringify(database), (err) => {});
