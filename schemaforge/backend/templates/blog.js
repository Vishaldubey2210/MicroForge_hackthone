module.exports = {
  id: 'blog',
  title: 'Headless CMS & Blog',
  description: 'Articles, Authors, Tags, Categories, Comments, MediaAssets, SEOConfigs',
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
