const { QueryTypes } = require('sequelize');
const { faker } = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const companies = await queryInterface.sequelize.query(
      'SELECT * FROM companies',
      { type: QueryTypes.SELECT }
    );

    const states = ['valid', 'invalid'];
    const items = [];
    for (let i = 0; i < companies.length; i++) {
      for (let j = 0; j < 5; j++) {
        const k = faker.mersenne.rand(0, 1);
        items.push({
          amount: faker.finance.amount(5, 10),
          state: states[k],
          nickname: faker.name.lastName(),
          createdAt: Date.now() / 1000,
          companyId: companies[i].id,
        });
      }
    }

    return queryInterface.bulkInsert('donations', items, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('donations', null, {});
  },
};
