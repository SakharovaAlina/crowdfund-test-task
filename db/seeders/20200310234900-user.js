const { faker } = require('@faker-js/faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const items = [];
    for (let i = 0; i < 10; i++) {
      
      const j = faker.mersenne.rand(0, 3);
      items.push({
        name: faker.name.fullName(),
        wallet: faker.datatype.uuid(),
        createdAt: Date.now() / 1000,
      })
      
    }
    return queryInterface.bulkInsert(
      'users',
      items,
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
