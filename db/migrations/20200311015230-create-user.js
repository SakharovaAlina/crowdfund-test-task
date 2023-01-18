'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.query(`
    CREATE TABLE users (
      id int NOT NULL AUTO_INCREMENT,
      name varchar(45) DEFAULT NULL,
      createdAt int DEFAULT NULL,
      updatedAt int DEFAULT NULL,
      PRIMARY KEY (id)
    )
    `);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users');
    },
};
