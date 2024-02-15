const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controller");
const authController = require("../controllers/auth.controller");
const userAuth = require("../middlewares/userAuth");
const { verifyToken } = require("../middlewares/users.middleware");
const { login, signup } = authController;

router.get("/", verifyToken, userController.get);
router.get("/:id", userController.getById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.post("/signup", userAuth.saveUser, signup);
router.post("/login", login);

module.exports = router;
