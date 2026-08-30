module.exports = {
  id: 'hotel',
  title: 'Hotel Booking Engine',
  description: 'Hotels, Rooms, RoomTypes, Bookings, Guests, Amenities, Payments',
  schemas: [
    {
      name: 'User',
      fields: [
        { name: 'email', type: 'String', required: true, unique: true },
        { name: 'name', type: 'String', required: true },
        { name: 'role', type: 'String', defaultValue: 'member' }
      ]
    }
  ]
};
