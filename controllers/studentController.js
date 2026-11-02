import connection from '../utils/db-connection.js';
const addEntries=(req,res)=>{
    const {email,name}=req.body;
    const InsertQuery=`INSERT INTO Students(name,email) VALUES(?,?)`;

    connection.execute(InsertQuery,[name,email],(err)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message);

            connection.end();

            return;
        }
        console.log(`student with name ${name} has been added`);
        res.status(200).send(`student with name ${name} has been added`);
    })
}
const updateEntries=(req,res)=>{
    const {id}=req.params;
    const {name}=req.body;
    const UpdateQuery=`UPDATE Students SET name=? WHERE id=?`;

    connection.execute(UpdateQuery,[name,id],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message);

            connection.end();

            return;
        }
        if(result.affectedrows==0){
            res.status(404).send(`student with id ${id} not found`);
            return;
        }
        console.log(`student with id ${id} has been updated`);
        res.status(200).send(`student with id ${id} has been updated`);
    })
}

const deleteEntries=(req,res)=>{
    const {id}=req.params;
    const deleteQuery=`DELETE FROM Students WHERE id=?`;
    connection.execute(deleteQuery,[id],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            connection.end();
            return;
        } else {
            if(result.affectedrows==0){
                res.status(404).send(`student with id ${id} not found`);
                connection.end();   
                return;
            }
            console.log(`student with id ${id} has been deleted`);
            res.status(200).send(`student with id ${id} has been deleted`);
        }
    })
}

export  { addEntries, updateEntries, deleteEntries };