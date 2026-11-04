import Users from './users.js';
import Buses from './buses.js';
import Bookings from './bookings.js';

// One user can have many bookings
Users.hasMany(Bookings, {
    foreignKey: 'userId',
    as: 'bookings'
});

Bookings.belongsTo(Users, {
    foreignKey: 'userId',
    as: 'user'
});

// One bus can have many bookings
Buses.hasMany(Bookings, {
    foreignKey: 'busId',
    as: 'bookings'
});

Bookings.belongsTo(Buses, {
    foreignKey: 'busId',
    as: 'bus'
});

export { Users, Buses, Bookings };