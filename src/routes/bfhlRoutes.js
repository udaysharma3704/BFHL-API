const express = require("express");
const { handleBFHL } = require("../controllers/bfhl_controller");

const router = express.Router();

router.post("/", handleBFHL);

module.exports = router;