"use strict";

const Aluno = require("../../models/Aluno");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("alunos", Aluno.tableAttributes);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("alunos");
  },
};
