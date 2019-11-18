module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Company', [{
    name: 'Vic Lawrence & Associates Limited',
    address: 'This is the address.',
    emailAddress: 'overtime@viclawrence.com',
    url: 'overtime.viclawrence.com',
    createdAt: new Date(),
    updatedAt: new Date()
  }]),
  down: queryInterface => queryInterface.bulkDelete('Company')
};
