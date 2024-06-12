import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express();

dotenv.config({
  path: "./env",
});
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
  const sql = "SELECT FROM register WHERE  `email` = ? AND `password` = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) return res.json(err);
    if(!data.lenght > 0){
      res.json("Failed")
    }
     else{
      res.json("Success")
     } 
    
  });
});

const port = process.env.PORT || 5000

app.use(express.json());
app.listen(port, () => {
  console.log(`app is listning on server port ${port}`);
});
app.get("/", (req, res) => {
  res.send("hello");
});
