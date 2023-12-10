const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const env = process.env;
const Pool = require("pg").Pool;

const pool = new Pool({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  port: env.DB_PORT,
});

module.exports = pool;
