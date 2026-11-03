import express from 'express';
import db from './utils/db-connection.js';
import studentRoutes from './routes/studentRoutes.js';
import userRoutes from './routes/userRoutes.js';
import busRoutes from './routes/busRoutes.js';
const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello darling')
})

app.use("/students",studentRoutes);

// User route
app.use('/users', userRoutes);

//Bus route
app.use('/buses', busRoutes);

app.listen(3003,(err)=>{
    console.log('server is running on port 3003');
})