import Bookings from '../models/bookings.js';
import Users from '../models/users.js';
import Buses from '../models/buses.js';

const addBooking = async (req, res) => {
    try {
        const { userId, busId, seatNumber } = req.body;

        if (!userId || !busId || !seatNumber) {
            return res.status(400).json({
                message: 'userId, busId and seatNumber are required'
            });
        }

        const user = await Users.findByPk(userId);

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        const bus = await Buses.findByPk(busId);

        if (!bus) {
            return res.status(404).json({
                message: 'Bus not found'
            });
        }

        const booking = await Bookings.create({
            userId,
            busId,
            seatNumber
        });

        return res.status(201).json({
            message: 'Booking created successfully',
            booking
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

export { addBooking };