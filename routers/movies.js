const express = require("express") // importiamo express
const router = express.Router() // mini-router per gestire un gruppo di rotte legate ad una risorsa: (/movies)
const movieController = require("../controllers/movieControllers")
// const connection = require('../data/movie_db') spostato in controllers

router.get("/", movieController.index)
router.get("/:id", movieController.show)
router.post("/:id", movieController.store)


module.exports = router