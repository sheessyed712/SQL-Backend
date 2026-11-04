import {DataTypes} from 'sequelize';
import sequelize from '../utils/db-connection.js';

const courses=sequelize.define('courses',{
    id:{
        type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,

    },
    name:{
        type:DataTypes.STRING(20),
        allowNull:false
    }
}
)
export default courses;