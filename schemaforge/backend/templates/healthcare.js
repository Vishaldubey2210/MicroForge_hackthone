module.exports = {
  id: 'healthcare',
  title: 'Clinic & Healthcare',
  description: 'Patients, Doctors, Clinics, Appointments, Prescriptions, MedicalRecords, Billings',
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
