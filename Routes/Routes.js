const express = require("express");
const router = express.Router();
const { fetchdata } = require("../controller/datacontroller");
router.get("/", fetchdata);

module.exports = router;
