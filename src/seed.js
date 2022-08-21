const fs = require("fs");
const path = require("path");
const faker = require("faker-br");
const { promisify } = require("util");

faker.setLocale("pt_BR");

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const seed = async (entity) => {
  // extract
  const file = await readFile(
    path.join(__dirname, `./assets/data/${entity}.json`)
  );
  const rawData = JSON.parse(file);

  // transform
  const data = transform(entity, rawData);

  // load
  await writeFile(
    path.join(__dirname, `./assets/data/new-${entity}.json`),
    JSON.stringify(data, null, 2)
  );
};

const transform = (entity, data) => {
  if (data.length === 0) {
    data = Array(100).fill(null);
  }

  switch (entity) {
    case "customers":
      return data.map((customer) => {
        const name = `${faker.name.firstName()} ${faker.name.lastName()}`;
        return {
          ...customer,
          name,
          email: faker.internet
            .email(name.split(" ")[0], name.split(" ")[1])
            .toLowerCase(),
          cpf: faker.br.cpf(),
          phone: faker.phone.phoneNumberFormat(),
        };
      }, []);
    case "accounts":
      const customers = require("./assets/data/customers.json");
      const customersId = customers.map((customer) => customer.id);

      return data.map((account) => {
        randomCustomerId = faker.random.arrayElement(customersId);
        return {
          ...account,
          customer_id: randomCustomerId,
          number: faker.finance.account(),
          balance: Number(faker.finance.amount(0, 100000, 2)),
          pin: faker.random.number({ min: 100000, max: 999999 }), // 6 digits
        };
      }, []);
  }
};

seed("customers");
seed("accounts");
