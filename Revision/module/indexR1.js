const express = require("express")


const port = 3000
const app = express()

app.get('/', (req, res) => {
    res.send("Home route")
})

app.get('/mayank', (req, res) => {
    res.send("Love you")
})

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
})