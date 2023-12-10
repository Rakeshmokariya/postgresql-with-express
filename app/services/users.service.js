const pool = require("../config/db.config");

const getMultiple = async () => {
  const rows = await pool.query("SELECT * FROM users");
  return rows.rows;
};

const getById = async (id) => {
  const rows = await pool.query("SELECT * from users WHERE id=$1", [id]);
  return rows.rows;
};

const createUser = async (name, email) => {
  const rows = await pool.query(
    "INSERT INTO users (name,email) VALUES ($1,$2)",
    [name, email]
  );
  return rows.rows;
};

const updateUser = async (name, email, id) => {
  const rows = await pool.query(
    "UPDATE users SET name=$1, email=$2 WHERE id=$3",
    [name, email, id]
  );
  return rows.rows;
};

const deleteUser = async (id) => {
  const rows = await pool.query("DELETE FROM users WHERE id=$1", [id]);
  return rows.rows;
};

module.exports = { getMultiple, getById, createUser, updateUser, deleteUser };
