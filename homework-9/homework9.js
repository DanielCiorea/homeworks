const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "developer",
    password: "1234",
    database: "employees"
  }
});

const addEmployee = (name, dateOfBirth, gender) =>
  knex("employees").insert({ name, dateOfBirth, gender });

const listEmployees = () =>
  knex.select("name", "dateOfBirth", "gender").from("employees");

// listEmployees()
//   .then(result => console.log(result))
//   .catch(err => console.error(err));

addEmployee("Crestopher Coloomb", "1758-12-12", "other")
  .then(result => console.log(result))
  .catch(err => console.error(err));
