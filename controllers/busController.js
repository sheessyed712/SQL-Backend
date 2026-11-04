
import connection from '../utils/db-connection.js';
import Buses from '../models/buses.js';
import {Op} from 'sequelize';
// POST /buses
const addBus = async (req, res) => {
    try{
        const { busNumber, totalSeats, availableSeats } = req.body;

        const bus=await Buses.create({
            busNumber:busNumber,
            totalSeats:totalSeats,
            availableSeats:availableSeats
        }) 
    }
    catch(error){
        res.status(500).send(error.message);
    }

    

    // const insertQuery = `
    //     INSERT INTO Buses(busNumber, totalSeats, availableSeats)
    //     VALUES (?, ?, ?)
    // `;

    // connection.execute(
    //     insertQuery,
    //     [busNumber, totalSeats, availableSeats],
    //     (err, result) => {

    //         if (err) {
    //             console.log(err);
    //             return res.status(500).send(err.message);
    //         }

    //         res.status(201).json({
    //             message: 'Bus added successfully',
    //             busId: result.insertId
    //         });
    //     }
    // );
};


// GET /buses/available/:seats
const getAvailableBuses = (req, res) => {
    try{
    const { seats } = req.params;

    const seatCount = Number(seats);

    if (!Number.isInteger(seatCount) || seatCount < 0) {
        return res.status(400).json({
            message: 'Please provide a valid seat count'
        });
    }
    const availableBuses=Buses.findAll({
        where:{
            availableSeats:{
                [Op.gt]:seatCount
            }
        }
    })
    res.status(200).json({
        message: 'Available buses retrieved successfully',
        buses:availableBuses
    })
    }catch(error){
        res.status(500).send(error.message);
    }



    // const selectQuery = `
    //     SELECT * FROM Buses
    //     WHERE availableSeats > ?
    // `;

    // connection.execute(selectQuery, [seatCount], (err, result) => {

    //     if (err) {
    //         console.log(err);
    //         return res.status(500).send(err.message);
    //     }

    //     res.status(200).json({
    //         message: 'Available buses retrieved successfully',
    //         buses: result
    //     });
    // });
};

export { addBus, getAvailableBuses };
