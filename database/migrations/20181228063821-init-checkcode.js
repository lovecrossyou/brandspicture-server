'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('checkcode', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      phone: STRING(30),
      code: STRING(30),
      type: STRING(20),
      created_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('checkcode');
  },
};
