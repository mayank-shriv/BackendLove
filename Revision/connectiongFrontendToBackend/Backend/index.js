import 'dotenv/config';
import express from 'express';


const port = process.env.PORT

const app = express()

app.get('/', (req, res) => {
    res.send("Server is ready")
})
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "setup": "Why do programmers always mix up Halloween and Christmas?",
            "punchline": "Because Oct 31 equals Dec 25."
        },
        {
            "id": 2,
            "setup": "A SQL query goes into a bar, walks up to two tables, and asks...",
            "punchline": "Can I join you?"
        },
        {
            "id": 3,
            "setup": "Why did the functional component feel lost?",
            "punchline": "Because it didn't know what state it was in!"
        },
        {
            "id": 4,
            "setup": "How many programmers does it take to change a light bulb?",
            "punchline": "None, that's a hardware problem."
        },
        {
            "id": 5,
            "setup": "Why do C# and Java developers keep breaking their keyboards?",
            "punchline": "Because they use a strongly typed language!"
        }
    ]

    res.send(jokes)
})

app.listen(port, () => {
    console.log(`App is listening at port ${port}`)
})