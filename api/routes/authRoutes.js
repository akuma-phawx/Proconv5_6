const { Router } = require("express");
const authController = require("../controllers/authController");
const router = Router();

// Register a new User
router.post("/register", authController.register);

// Login
router.post("/login", authController.login);

module.exports = router;
