const express = require("express")
const app = express()
const port = 3000

const connection = require('./data/movie_db')

app.get('/', (req, res) => {
    res.send('benvenuto nella mia webapp movies')
}

)

app.get('/movies', index)
app.get('/movies/:id', show)



function index(req, res) {
    const sql = 'SELECT * FROM movies';
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(results);
    });
}

function show(req, res) {

    // recuperiamo l'id e trasformiamolo in numero
    const id = req.params.id

    const sql = 'SELECT * FROM movies WHERE id = ?';
    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(results);
    });



}


app.listen(port, () => {
    console.log("server attivo sulla porta:" + " " + port)

})