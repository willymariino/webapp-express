const express = require("express") // importiamo express
const router = express.router // mini-router per gestire un gruppo di rotte legate ad una risorsa: (/movies)

router.get('/', (req, res) => {
    res.send('benvenuto nella mia webapp movies') //spostati in routers
})

module.exports = router