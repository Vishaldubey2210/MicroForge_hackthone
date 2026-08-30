module.exports = {
  id: 'fitness',
  title: 'Fitness & Workout Tracker',
  description: 'Users, Workouts, Exercises, WorkoutLogs, Diets, MealPlans, Goals',
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
