
import connection from '../utils/db-connection.js';

// POST /buses
const addBus = (req, res) => {

    const { busNumber, totalSeats, availableSeats } = req.body;

    const insertQuery = `
        INSERT INTO Buses(busNumber, totalSeats, availableSeats)
        VALUES (?, ?, ?)
    `;

    connection.execute(
        insertQuery,
        [busNumber, totalSeats, availableSeats],
        (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).send(err.message);
            }

            res.status(201).json({
                message: 'Bus added successfully',
                busId: result.insertId
            });
        }
    );
};


// GET /buses/available/:seats
const getAvailableBuses = (req, res) => {

    const { seats } = req.params;

    const seatCount = Number(seats);

    if (!Number.isInteger(seatCount) || seatCount < 0) {
        return res.status(400).json({
            message: 'Please provide a valid seat count'
        });
    }

    const selectQuery = `
        SELECT * FROM Buses
        WHERE availableSeats > ?
    `;

    connection.execute(selectQuery, [seatCount], (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).send(err.message);
        }

        res.status(200).json({
            message: 'Available buses retrieved successfully',
            buses: result
        });
    });
};

export { addBus, getAvailableBuses };
