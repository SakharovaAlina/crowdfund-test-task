'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.query(`
    CREATE TABLE certificates (
      id int NOT NULL AUTO_INCREMENT,
      templateId int DEFAULT NULL,
      fileName varchar(256) DEFAULT NULL,
      courseName varchar(45) DEFAULT NULL,
      subtitle varchar(45) DEFAULT NULL,
      name varchar(45) DEFAULT NULL,
      description TEXT DEFAULT NULL,
      date int DEFAULT NULL,
      signature varchar(45) DEFAULT NULL,
      userId int DEFAULT NULL,
      createdAt int DEFAULT NULL,
      updatedAt int DEFAULT NULL,
      PRIMARY KEY (id),
      KEY fk_certificates_user_idx (userId),
      KEY fk_certificates_template_idx (templateId),
      CONSTRAINT fk_templates_certificates FOREIGN KEY (templateId) REFERENCES templates (id) ON DELETE SET NULL,
      CONSTRAINT fk_users_certificates FOREIGN KEY (userId) REFERENCES users (id) ON DELETE SET NULL
    )
    `);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('certificates');
    },
};
