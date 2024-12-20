const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.NAME,
  
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }
  console.log("Connected to the database.");
});

module.exports = db;
