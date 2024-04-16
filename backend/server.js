const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const argon2 = require('argon2');

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

app.post('/register', (req, res) => {
    const uname_exists = "SELECT COUNT(*) AS count FROM users WHERE uname = ?";
    db.query(uname_exists, [req.body.uname], (err, unameResult) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: "Error checking username existence" });
        }
        if (unameResult[0].count > 0) {
            console.log(err);
            return res.status(400).json({ error: "Username already exists" });
        }

        const email_exists = "SELECT COUNT(*) AS count FROM users WHERE email = ?";
        db.query(email_exists, [req.body.email], async (err, emailResult) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: "Error checking email existence" });
            }
            if (emailResult[0].count > 0) {
                console.log(err);
                return res.status(400).json({ error: "Email already exists" });
                
            }
            try {
                const hashedPassword = await argon2.hash(req.body.password);        
                const sql = "INSERT INTO users (fname, lname, uname, email, password) VALUES (?,?,?,?,?)";
                const values = [
                        req.body.fname,
                        req.body.lname,
                        req.body.uname,
                        req.body.email,
                        hashedPassword
                    ];      

            db.query(sql, values, (err, data) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ error: "Error inserting user into database" });
                }
                    return res.status(200).json({ success: true });
                });
            } catch (error) {
                    console.error('Error hashing password:', error);
                    return res.status(500).json({ error: "Error hashing password" });
                }
            });
        });
    });


app.post('/login',(req, res) =>{
    const sql = "SELECT * FROM `users` WHERE uname = ?";
    const username = req.body.uname;

    db.query(sql, [username], async(err, results)=> {
        if (err){
            console.error('Error querying database:', err);
            return res.status(500).json({ error: 'An unexpected error occurred' });
        }
        if (results.length ===0){
            return res.status(400).json({ error: 'Username not found' });
        }
        const hashedPassword = results[0].password;

        try {
            const passwordMatch = await argon2.verify(hashedPassword, req.body.password);
            if (passwordMatch){
                return res.status(200).json({ success: true });
            }else {
                return res.status(401).json({ error: 'Incorrect password' });
            }
        } catch (error) {
            console.error('Error verifying password:', error);
            return res.status(500).json({ error: 'An unexpected error occurred' });

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
    const subcategory_id = req.query.subcategory_id;
    const sql = "SELECT ID, title, content, subcategory_id, DATE_FORMAT(created_at, '%m-%d-%Y %H:%i %p') AS formatted_timestamp, uname FROM question_bank WHERE subcategory_id=?";
    db.query(sql, [subcategory_id], (err, rows)=>{
        if(err){
            res.json({Message: err})
            return

        } 
        const questions = rows.map(row => ({
            id: row.ID,
            title: row.title,
            content: row.content,
            subcategory_id: row.subcategory_id,
            created_at: row.formatted_timestamp,
            uname: row.uname
        }));
        res.json(questions);
    });


});

app.get('/question/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT id, title, content, uname, DATE_FORMAT(created_at, '%m-%d-%Y %h:%i %p') AS formatted_timestamp, subcategory_id FROM question_bank WHERE id= ?";
    db.query(sql, [id], (err, rows) => {
        if (err) {
            res.json({ Message: err });
            return;
        } 
        const values = rows[0];
        if (!values) {
            res.json({ Message: "Question not found" });
            return;
        }

        const answerSQL = "SELECT id, subcategory_id, question_id, answer, uname, subcategory_id, DATE_FORMAT(created_at, '%m-%d-%Y %:%i %p') AS formatted_timestamp FROM answer_bank WHERE question_id = ?";
        db.query(answerSQL, [id], (err, answerRows) => {
            if (err) {
                res.json({ Message: err });
                return;
            }
            values.answers = answerRows;
            res.json(values);
        
        });
    });
});


app.post('/answer', (req,res)=>{
    const sql = "INSERT INTO answer_bank (subcategory_id, question_id, answer, uname) VALUES (?)";
    const values = [
        req.body.subcategory_id,
        req.body.question_id,
        req.body.answer,
        req.body.uname
    ];
    db.query(sql, [values], (err, data)=> {
        if(err){
            return res.json("Error");
        }
        res.json(data);
    }) 


})