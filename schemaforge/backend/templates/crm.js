module.exports = {
  id: 'crm',
  title: 'Customer Relationship (CRM)',
  description: 'Leads, Contacts, Deals, Pipelines, Activities, Notes, Companies',
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
