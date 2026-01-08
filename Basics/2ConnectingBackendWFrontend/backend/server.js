import express from "express";


const app = express();

// app.get('/', (req, res) => {
//     res.send("Server is ready");
// });

// get list of five joke

app.get('/api/jokes', (req,res)=> {
    const jokes= [
{
    id: 1,
    title: "Programmer Joke",
    content: "Why do programmers prefer dark mode? Because light attracts bugs!"
},
{
    id: 2,
    title: "JavaScript Joke",
    content: "Why did the developer go broke? Because he used up all his cache!"
},
{
    id: 3,
    title: "Database Joke",
    content: "A SQL query walks into a bar, walks up to two tables and asks... 'Can I join you?'"
},
{
    id: 4,
    title: "Git Joke",
    content: "Why did the developer get kicked out of class? Because he kept pushing his changes without pulling first!"
},
{
    id: 5,
    title: "AI Joke",
    content: "Why do AI developers make terrible partners? They're always overfitting to their training data!"
}];
res.send(jokes);});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server at http://localhost:${port}`);
});