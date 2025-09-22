'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        address: 'HCM',
        email: 'example@example.com',
        gender: 1,
        phoneNumber: '098765432',
        typeRole: 'R 1',
        positionId: 'Patien',
        image: '1233333',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
