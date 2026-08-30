module.exports = {
  id: 'eventmanagement',
  title: 'Event Ticketing Engine',
  description: 'Events, Venues, Organizers, TicketTiers, Bookings, Attendees, Sponsors',
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
