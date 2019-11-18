module.exports = {
  up: queryInterface => queryInterface.bulkInsert('LineManagers', [{
    idNumber: 'SN234567',
    firstname: 'SuperJohn',
    lastname: 'Johnny',
    email: 'super.john@init.com',
    phone: '08099887766',
    createdAt: new Date(),
    updatedAt: new Date(),
    role: 'supervisor'
  },
  {
    idNumber: 'SN763553',
    firstname: 'JohnBSM',
    lastname: 'DoeBSM',
    email: 'john.doiz@init.com',
    phone: '08076546766',
    createdAt: new Date(),
    updatedAt: new Date(),
    role: 'BSM'
  },
  {
    idNumber: 'SN769873',
    firstname: 'DoeBBSM',
    lastname: 'JohnnyBSM',
    email: 'johnny.doey@init.com',
    phone: '08099676766',
    createdAt: new Date(),
    updatedAt: new Date(),
    role: 'BSM'
  },
  {
    idNumber: 'SN760073',
    firstname: 'JohnSuppy',
    lastname: 'DoeBSMMy',
    email: 'jonz.super@init.com',
    phone: '08077232140',
    createdAt: new Date(),
    updatedAt: new Date(),
    role: 'supervisor'
  },
  {
    idNumber: 'SN112223',
    firstname: 'James',
    lastname: 'Enejo',
    email: 'spec.en.james@gmail.com',
    phone: '08033345766',
    createdAt: new Date(),
    updatedAt: new Date(),
    role: 'supervisor'
  },
  {
    idNumber: 'SN876300',
    firstname: 'James',
    lastname: 'Enejo',
    email: 'jillandroid@gmail.com',
    phone: '08090000676',
    createdAt: new Date(),
    updatedAt: new Date(),
    role: 'BSM'
  },
  {
    idNumber: 'SN728367',
    firstname: 'Rodney',
    lastname: 'Lascap',
    email: 'rodlas@viclawrence.com',
    phone: '08087987896',
    createdAt: new Date(),
    updatedAt: new Date(),
    role: 'supervisor'
  }]),
  down: queryInterface => queryInterface.bulkDelete('LineManagers')
};
