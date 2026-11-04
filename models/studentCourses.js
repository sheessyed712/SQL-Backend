import {DataTypes} from 'sequelize';
import sequelize from '../utils/db-connection.js';

const studentCourses=sequelize.define('studentCourses',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER

    }
});

export default studentCourses;