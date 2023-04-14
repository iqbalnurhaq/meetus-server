'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [
      {
        name: "Iqbal",
        profession: "Mobile",
        role: "admin",
        email: "iqbal@gmail.com",
        password: 'rahasia1234',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Nur",
        profession: "Front End Developer",
        role: "user",
        email: "nur@mail.com",
        password: 'rahasiaku123',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};

