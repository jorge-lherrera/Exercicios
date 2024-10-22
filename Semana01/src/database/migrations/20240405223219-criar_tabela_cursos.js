"use strict";

const Curso = require("../../models/Curso");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cursos", Curso.tableAttributes);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("cursos");
  },
};
