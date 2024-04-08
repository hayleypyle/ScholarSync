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
    database: 'ScholarSync'
})

app.listen(3000, () =>{
    console.log('listening on port 3000');
})

app.post('/register',(req, res) =>{
    const sql = "INSERT INTO users (fname, lname, uname, email, password) VALUES (?)";
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
    const sql = "SELECT * FROM `users` WHERE (uname = ? AND password = ?)";
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

app.post('/create',(req, res) =>{
    const sql = "INSERT INTO question_bank (title, content, subcategory_id, uname) VALUES (?)";
    const values = [
        req.body.title,
        req.body.content,
        req.body.subcategory_id,
        req.body.uname
    ]
    db.query(sql, [values], (err, data)=> {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.get('/', (req,res)=>{
    const sql = "SELECT ID, title, content, subcategory_id, created_at, uname FROM question_bank WHERE subcategory_id=1";
    // const values = [
    //     req.body.id,
    //     req.body.title,
    //     req.body.content,
    //     req.body.subcategory_id,
    //     req.body.created_at,
    //     req.body.uname
    // ]
    db.query(sql, (err, rows)=>{
        if(err){
            res.json({Message: err})
            return

        } 
        const questions = rows.map(row => ({
            id: row.ID,
            title: row.title,
            content: row.content,
            subcategory_id: row.subcategory_id,
            created_at: row.created_at,
            uname: row.uname
        }));
        res.json(questions);
    });


});


app.get('/question/:id', (req,res)=>{
    const id = req.params.id;
    const sql = "SELECT id, title, content, uname, created_at FROM question_bank WHERE id= ?";
    // const values = [
    //     req.body.id,
    //     req.body.title,
    //     req.body.content,
    //     req.body.uname,
    //     req.body.created_at,
        
    // ];
    db.query(sql, [id], (err, rows)=>{
        if(err) res.json({Message: err})
        res.json(rows)
    })


})


app.get('/answer/:id', (req,res)=>{
    const id = req.params.id;
    const sql = "SELECT title, content, uname FROM question_bank WHERE id= ?";
    db.query(sql, [id], (err, rows)=>{
        if(err) res.json({Message: err})
        res.json(rows)
    })


})