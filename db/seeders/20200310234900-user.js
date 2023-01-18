const {faker} = require('@faker-js/faker');

module.exports = {
    up: (queryInterface, Sequelize) => {
        const items = [];
        items.push({
            name: faker.name.fullName(),
            createdAt: Date.now() / 1000,
        });
        return queryInterface.bulkInsert('users', items, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    },
};
