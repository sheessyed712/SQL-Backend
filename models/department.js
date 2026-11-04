import {DataTypes} from 'sequelize';
import sequelize from '../utils/db-connection.js';

const department=sequelize.define('department',{
    id:{
        type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
    },
    name:{
        type:DataTypes.STRING(20),
        allowNull:false,
    unique:true
    }
})

export default department;