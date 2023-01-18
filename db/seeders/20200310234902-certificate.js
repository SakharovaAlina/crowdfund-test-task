const {QueryTypes} = require('sequelize');
const {faker} = require('@faker-js/faker');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const users = await queryInterface.sequelize.query(
            'SELECT * FROM users',
            {
                type: QueryTypes.SELECT,
            }
        );
        const templates = await queryInterface.sequelize.query(
            'SELECT * FROM templates',
            {type: QueryTypes.SELECT}
        );
        const items = [];

        for (let i = 0; i < templates.length; i++) {
            for (let j = 0; j < 5; j++) {
                items.push({
                    templateId: templates[i].id,
                    fileName: templates[i].fileName,
                    courseName: faker.company.bs(),
                    subtitle: faker.company.bs(),
                    name: faker.name.fullName(),
                    description: faker.lorem.paragraphs(4),
                    date: Date.now() / 1000,
                    signature: faker.name.firstName(),
                    userId: users[0].id,
                    createdAt: Date.now() / 1000,
                });
            }
        }

        return queryInterface.bulkInsert('certificates', items, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Certificates', null, {});
    },
};
