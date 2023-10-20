const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "production",
});

app.get("/", (req, res) => {
  return res.json("from server side");
});

app.get("/products", (req, res) => {
  const sql = "SELECT * FROM names";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
const port = "8081";
app.listen(port, () => {
  console.log(`listenning in 
  localhost:${port}`);
});
