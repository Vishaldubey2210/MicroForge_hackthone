module.exports = {
  id: 'saas',
  title: 'SaaS Multi-tenant',
  description: 'Organizations, Workspaces, Members, Projects, Tasks, Invoices, Subscriptions',
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
