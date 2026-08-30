module.exports = {
  id: 'ecommerce',
  title: 'E-Commerce',
  description: 'Users, Products, Categories, Orders, OrderItems, Reviews, Payments, Carts',
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
