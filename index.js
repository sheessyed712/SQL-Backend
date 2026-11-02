import express from 'express';
import mysql from 'mysql2';

const app=express();
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Shees@123456',
    database:'testdb'
})
connection.connect((err)=>{
    if(err){
        console.log('error connecting to database');
        return;
    }
    console.log('connected to database');

    const creationQuery=`create table Students(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(20)
)`

    connection.execute(creationQuery,(err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log('table created successfully');
    })
})

app.get('/',(req,res)=>{
    res.send('hello darling')
})

app.listen(3003,(err)=>{
    console.log('server is running on port 3003');
})