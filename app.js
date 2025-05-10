const express = require("express")
const app = express()
const port = 3000



// app.get('/', (req, res) => {
//     res.send('benvenuto nella mia webapp movies') spostati in routers
// })

// app.get('/movies', index)
// app.get('/movies/:id', show)

const moviesRouter = require("./routers/movies")
const homeRouter = require("./routers/home")

// collega tutte le rotte che iniziano con movies
app.use("/movies", moviesRouter)
app.use("/", homeRouter)


function show(req, res) {

    // recuperiamo l'id e trasformiamolo in numero
    const id = req.params.id



    const sql = 'SELECT * FROM movies WHERE id = ?';
    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        if (results.length === 0) return res.status(404).json({ error: "film non trovato" });
        res.json(results[0]);
    });



}


app.listen(port, () => {
    console.log("server attivo sulla porta:" + " " + port)

})
