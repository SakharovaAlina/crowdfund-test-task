'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`
      CREATE TABLE donations (
        id int NOT NULL AUTO_INCREMENT,
        amount float NOT NULL DEFAULT '0',
        nickname varchar(45) DEFAULT NULL,
        state enum('valid','invalid') NOT NULL DEFAULT 'valid',
        companyId int DEFAULT NULL,
        createdAt bigint DEFAULT NULL,
        updatedAt bigint DEFAULT NULL,
        PRIMARY KEY (id),
        KEY fk_donations_companies_idx (companyId),
        CONSTRAINT fk_donations_companies FOREIGN KEY (companyId) REFERENCES companies (id) ON DELETE SET NULL
      );
    `)
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('donations');
  },
};
