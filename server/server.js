console.log('Node-server')

//Uppgift 2
const express = require('express');
const server = express();

server
 .use(express.json())
 .use(express.urlencoded({ extended: false }))
 .use((req, res, next) => {
 res.header('Access-Control-Allow-Origin', '*')
 res.header('Access-Control-Allow-Headers', '*');
 res.header('Access-Control-Allow-Methods', '*');
 next();
 });

 server.listen(3000, () => {
    console.log('Server running on http://localhost:3000.');
 });

server.get('/users', (req, res) => {
    //(uppgift 3) Hämta data för att skicka som svar vid GET-förfrågan

    //Skapar en koppling till dabasfilen /gik339-labb2.db
    const db = new sqlite3.Database('./gik339-labb2.db');
    const sql = 'SELECT * FROM users';
    db.all(sql, (err, rows) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.send(rows);
        }
    });
    db.close();
});

//Uppgift 3
const sqlite3 = require('sqlite3').verbose();

//Uppgift 4
//Testa backend

//Uppgift 5