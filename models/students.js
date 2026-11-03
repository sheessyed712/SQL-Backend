import {Sequelize,DataTypes} from 'sequelize';
import sequelize from '../utils/db-connection.js';

const Students=sequelize.define('students',{
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
})

export default Students;