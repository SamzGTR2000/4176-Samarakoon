const express = require('express')

const app = express()

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke')
})

app.listen(4000, () => {
    console.log("Server listening on port 4000")
})