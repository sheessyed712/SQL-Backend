import connection from '../utils/db-connection.js';
import Users from '../models/users.js';
const addUser=async (req,res)=>{
    
    try{
        const {name,email}=req.body;

        const user=await Users.create({
            name:name,
            email:email
        })

        res.status(200).send(`user with name ${name} has been added`);
    }
    catch(error){
        res.status(500).send(error.message);
    }

    // const InsertQuery=`INSERT INTO Users(name,email) VALUES(?,?)`;

    // connection.execute(InsertQuery,[name,email],(err)=>{
    //     if(err){
    //         console.log(err);
    //         res.status(500).send(err.message);
    //         return;
    //     }
    //     res.status(200).send(`user with name ${name} has been added`);
    // })
};

const getUsers=async (req,res)=>{
    try{
        const users=await Users.findAll();
        res.status(200).send(users);
    }
    catch(error){
        res.status(500).send(error.message);
    }

    // const SelectQuery=`SELECT * FROM Users`;

    // connection.execute(SelectQuery,(err,results)=>{
    //     if(err){
    //         console.log(err);
    //         res.status(500).send(err.message);
    //         return;
    //     }
    //     res.status(200).send(results);
    // })
};
export {addUser,getUsers};