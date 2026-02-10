const express = require("express")
const router = express.Router();

const {healthCheck} = require("../controllers/health_controller");

router.get("/", healthCheck);
module.exports = router;