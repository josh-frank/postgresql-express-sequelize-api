'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert( "Users", [
      { username: "Josh", email: "josh@hirejoshfrank.com", password: "", createdAt: new Date(), updatedAt: new Date() }
    ], {} );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete( "Users", null, {} );
  }
};
