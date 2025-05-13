const connection = require('../data/movie_db')

function index(req, res) {
    const sql = `SELECT 
    movies.*, AVG (reviews.vote) AS media_recensioni 
    FROM movies LEFT JOIN reviews ON movies.id = reviews.movies_id
    GROUP BY movies.id`


    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(results.map(result => ({
            ...result,
            image: "http://127.0.0.1:3000/movies_cover/" + result.image

        })));
    });
}

function show(req, res) {
    const id = req.params.id;
    const sql = 'SELECT * FROM movies WHERE id = ?';
    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        if (results.length === 0) return res.status(404).json({ error: "film non trovato" });
        res.json({
            ...results[0],
            image: "http://127.0.0.1:3000/movies_cover/" + results[0].image
        });
    });
}
module.exports = { index, show }