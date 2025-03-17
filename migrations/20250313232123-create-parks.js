'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Parks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      imageUrl: {
        type: Sequelize.STRING,
        unique: true
      },
      enclosed: {
        type: Sequelize.BOOLEAN
      },
      bathrooms: {
        type: Sequelize.BOOLEAN
      },
      shade: {
        type: Sequelize.STRING
      },
      parking: {
        type: Sequelize.STRING
      },
      youngKidsArea: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Parks');
  }
};