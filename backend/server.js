const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sigin",
});

app.post("/register", (req, res) => {
  const sql = "INSERT INTO register (`name`,`email`,`password`) Values (?)";
  const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  const sql = "select * from register where `email`='email' AND `password`='password' ";
  const email = req.body.email;
  const password = req.body.password;
  db.query(sql, {email, password}, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.use(express.json());
const port = 5000;
app.listen(port, () => {
  console.log(`app is listning on server port ${port}`);
});
app.get("/", (req, res) => {
  res.send("hello");
});
