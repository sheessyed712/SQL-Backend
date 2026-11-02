
import mysql from 'mysql2';

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

    const queries = [
    `CREATE TABLE IF NOT EXISTS Users(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(20),
        email VARCHAR(255)
    )`,

    `CREATE TABLE IF NOT EXISTS Buses(
        id INT AUTO_INCREMENT PRIMARY KEY,
        busNumber VARCHAR(20),
        totalSeats INT,
        availableSeats INT
    )`,

    `CREATE TABLE IF NOT EXISTS Bookings(
        id INT AUTO_INCREMENT PRIMARY KEY,
        seatNumber INT
    )`,

    `CREATE TABLE IF NOT EXISTS Payments(
        id INT AUTO_INCREMENT PRIMARY KEY,
        amountPaid DECIMAL(10,2),
        paymentStatus VARCHAR(20)
    )`
];
    const createTables=(index=0)=>{
        if(index===queries.length){
            console.log('All tables created successfully');
            return;
        }

        connection.execute(queries[index],(err)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(`Table ${index+1} created successfully`);
            createTables(index+1);

        })
    };
    createTables();


    // connection.execute(creationQuery,(err)=>{
    //     if(err){
    //         console.log(err);
    //         connection.end();
    //         return;
    //     }
    //     console.log('table created successfully');
    // })
})
export default connection;