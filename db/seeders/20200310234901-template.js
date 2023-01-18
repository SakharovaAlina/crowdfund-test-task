const {QueryTypes} = require('sequelize');
const {faker} = require('@faker-js/faker');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const items = [];
        const files = ['cert1.png', 'cert2.webp', 'cert3.webp'];

        for (let i = 0; i < files.length; i++) {
            items.push({
                name: faker.company.name(),
                fileName: files[i],
                createdAt: Date.now() / 1000,
            });
        }

        return queryInterface.bulkInsert('templates', items, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Templates', null, {});
    },
};
