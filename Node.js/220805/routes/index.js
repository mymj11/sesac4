const express = require("express");
const visitorRouter = express.Router();
const visitor = require("../controller/VisitorController");

visitorRouter.get("/", visitor.get_visitors);

module.exports = visitorRouter;