const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");


const app = express();
app.use(cors());
app.use(express.json());


const con = mysql.createConnection({
host: "sql12.freesqldatabase.com",
user:"sql12744343",
password:"keTJKRr5Tx",
database:"fb12nov24"

})

app.post("/save", (req, res) =>{
let data = [req.body.name, req.body.feedback];
let sql="insert into student values(?,?)";
con.query(sql, data,(err,result) =>{
 if (err)  res.send(err);
 else  res.send(result);
});
});

app.listen(9000, ()=>{console.log("ready @ 9000")});