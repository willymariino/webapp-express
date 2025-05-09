const express = require("express")
const app = express()
const port = 3000

console.log("server attivo sulla porta" + " " + port)

const connection = require('./data/movie_db')
