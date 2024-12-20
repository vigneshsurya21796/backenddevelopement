const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const db = require("./db/connection");
const port = process.env.PORT || 3000;
const {errorhandle} = require("./middleware/errormiddleware")
const route = require("./Routes/Routes")
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/",route)
app.use(errorhandle)
app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});
