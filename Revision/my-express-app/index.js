import express from "express";
import 'dotenv/config';
const app = express();

const port = process.env.PORT

// app.get('/', (req,res) => {              "/"refer to the homepage  
//     res.send("Hello World from Express!");
// });

app.get('/', (req, res) => {
    res.send(`GET request to the homepage`);
})
app.post('/', (req, res) => {
    res.send(`POST request to the homepage`);
})
app.put('/', (req, res) => {
    res.send(`PUT request to the homepage`);
})
app.patch('/', (req, res) => {
    res.send(`PATCH request to the homepage`);
})
app.delete('/', (req, res) => {
    res.send(`delete request to the homepage`);
})
app.get('/', (req, res) => {
    res.send(`About Page`);
})

app.all('*path', (req, res) => {
    res.status(404).send('404 - Page not found');
});



app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});