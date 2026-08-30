module.exports = {
  id: 'lms',
  title: 'LMS & Education',
  description: 'Students, Instructors, Courses, Modules, Lessons, Enrollments, Quizzes, Certificates',
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
