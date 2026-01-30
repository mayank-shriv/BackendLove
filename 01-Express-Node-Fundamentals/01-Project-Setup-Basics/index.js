require('dotenv').config()
// Import the Express library to create a web server
const express = require('express')

// Create an instance of an Express application
const app = express()

// Define the port number where the server will listen for requests
const port = process.env.PORT || 3000; // Use the PORT environment variable or default to 3000

// Define a route for the root URL ('/')
// When a GET request is made to '/', the server responds with 'Hello World!'
app.get('/', (req, res) => {
    res.send('Hello World!')
})
// Define a route for '/twitter'
// When a GET request is made to '/twitter', the server responds with the username
app.get('/twitter', (req, res) => {
    res.send('mayankshriv07')
})

app.get('/login', (req, res) => {
    res.send("<h1> Please Please Please Don't Broke my heart </h1>")
})
// Start the server and listen on the specified port
// When the server starts, it logs a message to the console
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
