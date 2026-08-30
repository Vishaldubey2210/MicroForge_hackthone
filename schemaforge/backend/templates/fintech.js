module.exports = {
  id: 'fintech',
  title: 'Fintech & Banking',
  description: 'Accounts, Transactions, Wallets, Cards, Beneficiaries, KYCVerifications, Loans',
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
