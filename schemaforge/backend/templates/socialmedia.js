module.exports = {
  id: 'socialmedia',
  title: 'Social Network',
  description: 'Users, Posts, Comments, Likes, Follows, DirectMessages, Notifications, Stories',
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
