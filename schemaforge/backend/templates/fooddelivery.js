module.exports = {
  id: 'fooddelivery',
  title: 'Food Delivery App',
  description: 'Restaurants, Menus, FoodItems, Orders, Drivers, DeliveryAddresses, Reviews',
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
