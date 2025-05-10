const express = require("express")
const app = express()
const port = 3000
const errorsHandler = require("./middlewares/errorsHandler")
const notFound = require("./middlewares/notFound")

app.use(errorsHandler)
app.use(notFound)

// app.get('/', (req, res) => {
//     res.send('benvenuto nella mia webapp movies') spostate le rotte in routers
// })

// app.get('/movies', index)
// app.get('/movies/:id', show)

const moviesRouter = require("./routers/movies")
const homeRouter = require("./routers/home")

// collega tutte le rotte che iniziano con movies
app.use("/movies", moviesRouter)
app.use("/", homeRouter)


app.listen(port, () => {
    console.log("server attivo sulla porta:" + " " + port)

})
