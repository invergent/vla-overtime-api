const bcrypt = require('bcrypt');

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Staff', [{
    staffId: 'TN012345',
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@init.com',
    password: bcrypt.hashSync('password', 7),
    image: 'https://res.cloudinary.com/dbsxxymfz/image/upload/v1536757459/dummy-profile.png',
    phone: '08065432109',
    accountNumber: '0012233432',
    branchId: 1,
    lineManagerId: 1,
    roleId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    staffId: 'TN046345',
    firstname: 'Jane',
    lastname: 'Doe',
    email: 'jane.doe@init.com',
    password: bcrypt.hashSync('password', 7),
    image: 'https://res.cloudinary.com/dbsxxymfz/image/upload/v1536757459/dummy-profile.png',
    phone: '08065468109',
    accountNumber: '0012273432',
    branchId: 2,
    lineManagerId: 2,
    roleId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    staffId: 'TN032375',
    firstname: 'Mercy',
    lastname: 'Brawl',
    email: 'mercy.brown@init.com',
    password: bcrypt.hashSync('password', 7),
    image: 'https://res.cloudinary.com/dbsxxymfz/image/upload/v1536757459/dummy-profile.png',
    phone: '08098342109',
    accountNumber: '0012273495',
    branchId: 1,
    lineManagerId: 6,
    roleId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    staffId: 'TN046455',
    firstname: 'Molly',
    lastname: 'Dee',
    email: 'molly.dee@init.com',
    password: bcrypt.hashSync('password', 7),
    image: 'https://res.cloudinary.com/dbsxxymfz/image/upload/v1536757459/dummy-profile.png',
    phone: '08065432345',
    accountNumber: '0012273888',
    branchId: 2,
    lineManagerId: 6,
    roleId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    staffId: 'TN044455',
    firstname: 'Gamolly',
    lastname: 'Zeezana',
    email: 'zana.ford@init.com',
    password: bcrypt.hashSync('password', 7),
    image: 'https://res.cloudinary.com/dbsxxymfz/image/upload/v1536757459/dummy-profile.png',
    phone: '08065466109',
    accountNumber: '0012273654',
    branchId: 2,
    lineManagerId: 6,
    roleId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    staffId: 'TN042995',
    firstname: 'Ligamala',
    lastname: 'Anziba',
    email: 'ligamala.muche@init.com',
    password: bcrypt.hashSync('password', 7),
    image: 'https://res.cloudinary.com/dbsxxymfz/image/upload/v1536757459/dummy-profile.png',
    phone: '08012432133',
    accountNumber: '0012273633',
    branchId: 2,
    lineManagerId: 6,
    roleId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    staffId: 'TN074695',
    firstname: 'Archnic',
    lastname: 'Zintra',
    email: 'zintra.zulch@init.com',
    password: bcrypt.hashSync('password', 7),
    image: 'https://res.cloudinary.com/dbsxxymfz/image/upload/v1536757459/dummy-profile.png',
    phone: '07065432209',
    accountNumber: '0012276773',
    branchId: 1,
    lineManagerId: 1,
    roleId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    staffId: 'TN075595',
    firstname: 'Blizcan',
    lastname: 'Ablick',
    email: 'ablick.pitz@init.com',
    password: bcrypt.hashSync('password', 7),
    image: 'https://res.cloudinary.com/dbsxxymfz/image/upload/v1536757459/dummy-profile.png',
    phone: '09065777109',
    accountNumber: '0012276767',
    branchId: 1,
    lineManagerId: 2,
    roleId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    staffId: 'ADMIN001',
    firstname: 'TheAdmin',
    lastname: 'JustAdmin',
    email: 'theadmin@init.com',
    password: bcrypt.hashSync('password', 7),
    image: 'https://res.cloudinary.com/dbsxxymfz/image/upload/v1536757459/dummy-profile.png',
    phone: '08065432122',
    accountNumber: '0012276453',
    roleId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    staffId: 'TN098432',
    firstname: 'King',
    lastname: 'James',
    email: 'spec.en.james@gmail.com',
    password: bcrypt.hashSync('password', 7),
    image: 'https://res.cloudinary.com/dbsxxymfz/image/upload/v1536757459/dummy-profile.png',
    phone: '08077772109',
    accountNumber: '0012223451',
    changedPassword: true,
    lineManagerId: 6,
    branchId: 2,
    roleId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    staffId: 'TN111111',
    firstname: 'Esther',
    lastname: 'Ohiorhenuan',
    email: 'omoyeberry@gmail.com',
    password: bcrypt.hashSync('password', 7),
    image: 'https://res.cloudinary.com/dbsxxymfz/image/upload/v1536757459/dummy-profile.png',
    phone: '08055552109',
    accountNumber: '0012233476',
    lineManagerId: 4,
    branchId: 2,
    roleId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  }]),
  down: queryInterface => queryInterface.bulkDelete('Staff')
};
