const express = require("express");

const companyRouter = express.Router();

const companyController = require("../controllers/companyController");
const authMiddleware = require("../middleware/authMiddleware");

companyRouter.get("/", authMiddleware("company"), companyController);

module.exports = companyRouter;