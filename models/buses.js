import {DataTypes} from 'sequelize';
import sequelize from '../utils/db-connection.js';

const Buses=sequelize.define('Buses',{
    id:{
        type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
    },
    busNumber:{
        type:DataTypes.STRING(20),
        allowNull:false,
    unique:true
    },
    totalSeats:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    availableSeats:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

export default Buses;