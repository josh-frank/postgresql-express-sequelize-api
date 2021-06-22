'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert( "Posts", [
      { title: "Josh's first post", content: "I see a ship in the harbor", userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: "Josh's second post", content: "I can and shall obey", userId: 1, createdAt: new Date(), updatedAt: new Date() }
    ], {} );
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete( "Posts", null, {} );
  }
};
