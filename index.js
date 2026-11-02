import express from 'express';
import db from './utils/db-connection.js';
import studentRoutes from './routes/studentRoutes.js';
const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello darling')
})

app.use("/students",studentRoutes);


app.listen(3003,(err)=>{
    console.log('server is running on port 3003');
})