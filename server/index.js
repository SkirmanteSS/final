const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhoost',
    user: 'root',
    password: 'root',
    database: 'googledatabase',
});


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get("/api/get", (req, res) => {
    const sqlSelect = "Select * from regUsers";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });

});
app.post("/api/insert", (req, res) => {
    const userName = req.body.userName
    const userEmail = req.body.userEmail
    const userAge = req.body.userAge

    const sqlInsert = "INSERT INTO user (userName, userEmail, userAge) VALUES (?, ?, ?);"
    db.query(sqlInsert, [userName, userEmail, userAge], (err, result) => {});
        console.log(err);
});

app.listen(1337, () => {
    console.log('running on port 1337')

});

