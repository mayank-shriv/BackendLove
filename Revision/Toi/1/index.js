import express from 'express';
// import fs from 'fs'
const app = express();


app.use(express.static("public"));
       

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
// file system approach
// app.get('/', (req, res) => {
//     fs.readFile('index.html', 'utf8', (err, data) => {
//         if (err) {
//             return res.status(500).send("Error reading file")
//         }
//         res.send(data);
//     });
// });




// app.get('/about', (req, res) => {
//     fs.readFile('about.html', 'utf8', (err, data) => {
//         if (err) {
//             return res.status(500).send("Error reading file");
//         }
//         res.send(data)
//     })
// })
// app.get('/contract', (req, res) => {
//     fs.readFile('contractMe.html', 'utf8', (err, data) => {
//         if (err) {
//             return res.status(500).send("Error reading file");
//         }
//         res.send(data)
//     })
// })
// app.use((req, res) => {
//     fs.readFile('404.html', 'utf8', (err, data) => {
//         if (err) {
//             return res.status(500).send("Error reading file");
//         }
//         return res.status(404).send(data);
//     });
// });

