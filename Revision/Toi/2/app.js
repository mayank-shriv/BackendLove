import express from 'express';
import router from './routes/userRoutes.js';
const app = express();
const port = 3000;



app.get('/',(req,res)=>{
    res.send(
    "Hello World!"
    )
})
app.use('/user',router)

app.listen(port, (err)=>{
    if(err){
        throw  err;
    }
    console.log(`My first express App running on port :${port}`)
})