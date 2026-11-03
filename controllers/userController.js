import connection from '../utils/db-connection.js';

const addUser=(req,res)=>{
    const {name,email}=req.body;
    const InsertQuery=`INSERT INTO Users(name,email) VALUES(?,?)`;

    connection.execute(InsertQuery,[name,email],(err)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            return;
        }
        res.status(200).send(`user with name ${name} has been added`);
    })
};

const getUsers=(req,res)=>{
    const SelectQuery=`SELECT * FROM Users`;

    connection.execute(SelectQuery,(err,results)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            return;
        }
        res.status(200).send(results);
    })
};
export {addUser,getUsers};