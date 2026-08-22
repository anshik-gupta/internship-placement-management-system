const express = require("express");

const studentRouter = express.Router();

const studentController = require("../controllers/studentController");
const authMiddleware = require("../middleware/authMiddleware");

studentRouter.get("/", authMiddleware("student"), studentController);

module.exports = studentRouter;