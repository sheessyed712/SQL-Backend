import Bookings from '../models/bookings.js';
import Users from '../models/users.js';
import Buses from '../models/buses.js';

const getUserBookings = async (req, res) => {
    try {
        const { id } = req.params;

        const bookings = await Bookings.findAll({
            where: {
                userId: id
            },
            attributes: ['id', 'seatNumber'],
            include: [
                {
                    model: Buses,
                    as: 'bus',
                    attributes: ['busNumber']
                }
            ]
        });

        res.status(200).json(bookings);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


const getBusBookings = async (req, res) => {
    try {
        const { id } = req.params;

        const bookings = await Bookings.findAll({
            where: {
                busId: id
            },
            attributes: ['id', 'seatNumber'],
            include: [
                {
                    model: Users,
                    as: 'user',
                    attributes: ['name', 'email']
                }
            ]
        });

        res.status(200).json(bookings);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export { getUserBookings, getBusBookings };