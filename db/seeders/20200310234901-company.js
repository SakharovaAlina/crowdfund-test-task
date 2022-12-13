const { QueryTypes } = require('sequelize');
const { faker } = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.sequelize.query('SELECT * FROM users', {
      type: QueryTypes.SELECT,
    });

    const statuses = ['active', 'expired', 'successful', 'fraud'];
    const items = [];

    for (let i = 0; i < users.length; i++) {
      for (let c = 0; c <= faker.mersenne.rand(1, 3); c++) {
        const j = faker.mersenne.rand(0, 4);
        const time = faker.date.between(
          new Date(2022, 11, 1).toISOString(),
          new Date(2022, 11, 20).toISOString()
        );
        items.push({
          name: faker.company.name(),
          description: faker.commerce.productDescription(),
          goal: faker.finance.amount(5, 50),
          status: statuses[j],
          expirationDate: time.getTime() / 1000,
          createdAt: Date.now() / 1000,
          ownerUserId: users[i].id,
        });
      }
    }

    return queryInterface.bulkInsert('companies', items, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Companies', null, {});
  },
};
