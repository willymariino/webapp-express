const connection = require('../data/movie_db')

function index(req, res) {
    const sql = `SELECT 
    movies.*, ROUND(AVG(reviews.vote), 2) AS media_recensioni 
    FROM movies LEFT JOIN reviews ON movies.id = reviews.movie_id
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
    // prima query dettaglio movie
    const sql = `SELECT movies.*,
                ROUND(AVG(reviews.vote), 2) AS reviews_vote
                FROM movies
                LEFT JOIN
                reviews ON movies.id = reviews.movie_id
                  WHERE movies.id = ?
                GROUP BY movies.id`
    connection.query(sql, [id], (err, results) => {
        if (err)

            return res.status(500).json({ error: 'Database query failed' });

        if (results.length === 0)

            return res.status(404).json({ error: "film non trovato" });

        const movie = ({
            ...results[0],
            image: "http://127.0.0.1:3000/movies_cover/" + results[0].image
        });

        const sqlReviews = `SELECT reviews.* FROM reviews
    join movies ON movies.id = reviews.movie_id
    WHERE movies.id = ?`;
        connection.query(sqlReviews, [id], (err, results) => {
            if (err) {
                return res.status(500).json({
                    status: "500",
                    error: "Query error"
                })

            }

            if (results.length === 0) {
                return res.status(404).json({
                    status: "404",
                    error: "movies not found"
                })
            }
            movie.reviews = results;
            res.json(movie);
        })

    });
    // recensioni


}

function store(req, res) {

    // idedentificativo libro
    const id = req.params.id

    const { name, vote, text } = req.body

    const sql = `INSERT INTO movies.reviews (movie_id, name, vote, text) VALUES (?, ?, ?, ?)`

    const values = [id, name, vote, text]

    connection.query(sql, values, (err, results) => {

        if (err) {
            return res.status(500).json({
                errorMessage: err.sqlMessage
            })
        }

        res.status(201);
        res.json({
            id,
            name,
            vote,
            text
        })

    })


}


module.exports = { index, show, store }