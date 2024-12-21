const express = require("express");
const router = express.Router();
const { fetchdata } = require("../controller/datacontroller");
router.get("/users", fetchdata);

module.exports = router;
