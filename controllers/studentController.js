import connection from '../utils/db-connection.js';
import Students from '../models/students.js';
import identity from '../models/identityCard.js';
const addEntries=async (req,res)=>{
    
    try {
        const {email,name,age}=req.body;
        const student=await Students.create({
            name:name,
            email:email,
            age:age
        })
        res.status(200).send('student with name ${name} has been added');
    } catch (error) {
        res.status(500).send(error.message);
    }
    // const InsertQuery=`INSERT INTO Students(name,email,age) VALUES(?,?,?)`;

    // connection.execute(InsertQuery,[name,email,age],(err)=>{
    //     if(err){
    //         console.log(err);
    //         res.status(500).send(err.message);

    //         connection.end();

    //         return;
    //     }
    //     console.log(`student with name ${name} has been added`);
    //     res.status(200).send(`student with name ${name} has been added`);
    // })
}
const updateEntries=async (req,res)=>{

try {
    const {id}=req.params;
    const {name}=req.body;

    const student=await Students.findByPk(id);
    if(!student){
        res.status(404).send(`student with id ${id} not found`);
    }
    student.name=name;
    await student.save();
    res.status(200).send(`student with id ${id} has been updated`);
} catch (error) {
    res.status(500).send(error.message);
}

    // const UpdateQuery=`UPDATE Students SET name=? WHERE id=?`;

    // connection.execute(UpdateQuery,[name,id],(err,result)=>{
    //     if(err){
    //         console.log(err);
    //         res.status(500).send(err.message);

    //         connection.end();

    //         return;
    //     }
    //     if(result.affectedrows==0){
    //         res.status(404).send(`student with id ${id} not found`);
    //         return;
    //     }
    //     console.log(`student with id ${id} has been updated`);
    //     res.status(200).send(`student with id ${id} has been updated`);
    // })
}

const deleteEntries=async (req,res)=>{
    
    try {
        const {id}=req.params;
        const student=await Students.destroy({
            where:{
                id:id
            }
        })
        if(!student){
            res.status(404).send(`student with id ${id} not found`);
        }
        res.status(200).send(`student with id ${id} has been deleted`);
    } catch (error) {
        res.status(500).send(error.message);
    }


    // const deleteQuery=`DELETE FROM Students WHERE id=?`;
    // connection.execute(deleteQuery,[id],(err,result)=>{
    //     if(err){
    //         console.log(err);
    //         res.status(500).send(err.message);
    //         connection.end();
    //         return;
    //     } else {
    //         if(result.affectedrows==0){
    //             res.status(404).send(`student with id ${id} not found`);
    //             connection.end();   
    //             return;
    //         }
    //         console.log(`student with id ${id} has been deleted`);
    //         res.status(200).send(`student with id ${id} has been deleted`);
    //     }
    // })
}

const getAllEntries=(req,res)=>{
    const selectQuery=`SELECT * FROM Students`;
    connection.execute(selectQuery,(err,results)=>{
        if(err){
            res.status(500).send(err.message);
            connection.end();
            return;
        }
        res.status(200).send(results);
    })
}

const getEntryById=(req,res)=>{
    const {id}=req.params;
    const selectQuery=`SELECT * FROM Students WHERE id=?`;
    connection.execute(selectQuery,[id],(err,results)=>{
        if(err){
            res.status(500).send(err.message);
            connection.end();
            return;
        }
        if(results.length===0){
            res.status(404).send(`student with id ${id} not found`);
            return;
        }
        res.status(200).send(results[0]);
    })
}

const addingValuesToStudentandIdCard=async(req,res)=>{
    //"student":{name:"john"},
    //"identityCard":{cardNumber:"1234567890"}
    try{
        const student=await student.create(req.body.student);
        const IDCard=await identity.create(
            {...req.body.identityCard,
            StudentId:student.id}
        );
        res.status(200).send(student,IDCard);
    }
    catch(error){
        res.status(500).send(error.message);
    }

}
export  { addEntries, updateEntries, deleteEntries, getAllEntries, getEntryById ,addingValuesToStudentandIdCard};