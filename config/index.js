const sequelize = require("./connection");
const { PORT, DATABASE_HOST } = require(".environment");

module.exports = {
  sequelize,
  PORT,
  DATABASE_HOST
};
