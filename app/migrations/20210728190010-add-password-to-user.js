'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn( "Users", "password", { type: Sequelize.STRING } );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn( "Users", "password" );
  }

};
