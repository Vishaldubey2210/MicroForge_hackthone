module.exports = {
  id: 'helpdesk',
  title: 'Customer Support Helpdesk',
  description: 'Tickets, Agents, Customers, Comments, SLAs, KnowledgeArticles, Feedback',
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
