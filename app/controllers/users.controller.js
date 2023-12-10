const users = require("../services/users.service");

const get = async (req, res, next) => {
  try {
    res.json(await users.getMultiple());
  } catch (err) {
    console.error(`Error while getting users`, err.message);
    next(err);
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  try {
    res.json(await users.getById(id));
  } catch (err) {
    console.error(`Error while getting users`, err.message);
    throw err;
  }
};

const createUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    res.json(await users.createUser(name, email));
  } catch (err) {
    console.error(`Error while getting users`, err.message);
    throw err;
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;

  try {
    res.json(await users.updateUser(name, email, id));
  } catch (err) {
    console.error(`Error while getting users`, err.message);
    throw err;
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    res.json(await users.deleteUser(id));
  } catch (err) {
    console.error(`Error while getting users`, err.message);
    throw err;
  }
};

module.exports = { get, getById, createUser, updateUser, deleteUser };
