import sequelize from "../utils/db-connection.js";
import { DataTypes } from "sequelize";

const Bookings=sequelize.define('Booking',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    }
    ,
    seatNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'Bookings',
    timestamps: false
}
);

export default Bookings;
