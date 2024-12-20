const db = require("../db/connection");
const asyncHandler = require("express-async-handler");
const fetchdata = asyncHandler(async (req, res) => {
  try {
    const [rows] = await db.promise().execute("SELECT * FROM users");

    return res.status(200).json(rows);
  } catch (err) {
    res.status(500);
    throw new Error("Error while fetching the data");
  }
});

module.exports = { fetchdata };
