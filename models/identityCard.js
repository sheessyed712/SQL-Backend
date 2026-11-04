import {DataTypes} from 'sequelize';
import sequelize from '../utils/db-connection.js';

const IdentityCard=sequelize.define('identityCard',{
    id:{
        type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
    },
    cardNumber:{
        type:DataTypes.STRING(20),
        allowNull:false
    }
});
export default IdentityCard;