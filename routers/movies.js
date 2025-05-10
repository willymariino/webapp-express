const express = require("express") // importiamo express
const router = express.Router() // mini-router per gestire un gruppo di rotte legate ad una risorsa: (/movies)
const connection = require('./data/movie_db')

router.get("/", function index(req, res) {
    const sql = 'SELECT * FROM movies';
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(results);
    });
})

module.exports = router