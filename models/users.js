import {DataTypes} from 'sequelize';
import sequelize from '../utils/db-connection.js';

const Users=sequelize.define('users',{
    id:{
        type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
    allowNull:false
},
name:{
    type:DataTypes.STRING,
    allowNull:false
},
email:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
}
});

export default Users;