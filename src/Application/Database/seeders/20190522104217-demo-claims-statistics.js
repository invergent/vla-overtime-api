module.exports = {
  up: queryInterface => queryInterface.bulkInsert('ClaimsStatistics', [{
    year: '2019',
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  }]),
  down: queryInterface => queryInterface.bulkDelete('ClaimsStatistics')
};
