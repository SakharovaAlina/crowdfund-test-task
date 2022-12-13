'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`
      CREATE TABLE companies (
        id int NOT NULL AUTO_INCREMENT,
        name varchar(45) DEFAULT NULL,
        ownerUserId INT,
        description text,
        goal float DEFAULT NULL,
        status enum('active','expired','fraud','successful') NOT NULL DEFAULT 'active',
        expirationDate bigint DEFAULT NULL,
        createdAt bigint DEFAULT NULL,
        updatedAt bigint DEFAULT NULL,
        PRIMARY KEY (id),
        KEY fk_companies_user_idx (ownerUserId),
        CONSTRAINT fk_users_companies FOREIGN KEY (ownerUserId) REFERENCES users (id) ON DELETE SET NULL
      )
    `);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('companies');
  },
};
