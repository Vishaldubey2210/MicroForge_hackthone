module.exports = {
  id: 'realestate',
  title: 'Real Estate & Housing',
  description: 'Properties, Listings, Agents, Inquiries, Bookings, Inspections, Reviews',
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
