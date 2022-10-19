const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

const customers = [];

/**
 * cpf - string
 * name - string
 * id - uuid
 * statment []
 */

app.post("/account", (request, response) => {
  const { cpf, name } = requests.body;

  const id = uuidv4();

  customers.push({
    id,
    cpf,
    name,
    statment: [],
  });

  return response.status(201).send();

});

app.listen(3333);
