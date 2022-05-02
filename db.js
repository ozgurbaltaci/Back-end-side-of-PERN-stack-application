const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "ozgurpostgres",
  host: "localhost",
  port: 5432,
  database: "seminar_project",
});

module.exports = pool;
