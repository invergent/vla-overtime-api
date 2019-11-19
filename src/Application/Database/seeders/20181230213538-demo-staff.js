const bcrypt = require('bcrypt');

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Staff', [{
    staffId: 'ADMIN001',
    firstname: 'Augustine',
    lastname: 'Agwai',
    email: 'augustine@viclawrence.com',
    password: bcrypt.hashSync('password', 7),
    image: 'https://res.cloudinary.com/dbsxxymfz/image/upload/v1536757459/dummy-profile.png',
    phone: '08000000001',
    accountNumber: '0000000001',
    roleId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }]),
  down: queryInterface => queryInterface.bulkDelete('Staff')
};
