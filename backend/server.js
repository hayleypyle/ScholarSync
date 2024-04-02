const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users'
})

app.listen(3000, () =>{
    console.log('listening on port 3000');
})

app.post('/register',(req, res) =>{
    const sql = "INSERT INTO login (fname, lname, uname, email, password) VALUES (?)";
    const values = [
        req.body.fname,
        req.body.lname,
        req.body.uname,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data)=> {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})
app.post('/login',(req, res) =>{
    const sql = "SELECT * FROM `login` WHERE (uname = ? AND password = ?)";
    const values = [
        req.body.uname,
        req.body.password
    ];

    db.query(sql, values, (err, data)=> {
        if(err){
            return res.json("error");
        }
        if(data.length > 0){
            return res.json("success")
    
        } else {
            return res.json("failure")
        }
    })
}) 