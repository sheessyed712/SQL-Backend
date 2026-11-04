import User from '../models/user.js';

const addUser=async(req,res)=>{
    try{
        const {username,phone,email}=req.body;
        if(!username || !phone || !email){
            res.status(400).send('username, phone and email are required');
            return;
        }
        const user=await User.create({
            username:username,
            phone:phone,
            email:email
        })

        res.status(200).send(`user with name ${username} has been added`);
    }
    catch(error){
        res.status(500).send(error.message);

    }
}

const getUsers=async(req,res)=>{
    try{
        const users=await User.findAll();
        res.status(200).send(users);

    }
    catch(error){
        res.status(500).send(error.message);
    }

}
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedUser = await User.destroy({
            where: {
                id: id
            }
        });

        if (deletedUser === 0) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.status(200).json({
            message: 'User deleted successfully'
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export {addUser,getUsers,deleteUser};