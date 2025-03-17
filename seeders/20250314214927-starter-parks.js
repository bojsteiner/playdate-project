'use strict';
const { Op } = require('sequelize');

const parkList = [{
  name: 'Lincoln Park',
  address: '1450 High St, Alameda, CA 94501',
  imageUrl: '/images/lincoln_park.jpg',
  enclosed: false,
  bathrooms: true,
  shade: 'plenty',
  parking: 'parking lot',
  youngKidsArea: true
 }]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Parks', parkList)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Parks', { [Op.or]: parkList } )
  }
};
