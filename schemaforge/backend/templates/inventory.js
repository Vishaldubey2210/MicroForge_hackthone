module.exports = {
  id: 'inventory',
  title: 'Warehouse & Inventory ERP',
  description: 'Suppliers, Warehouses, Products, StockItems, PurchaseOrders, Shipments',
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
