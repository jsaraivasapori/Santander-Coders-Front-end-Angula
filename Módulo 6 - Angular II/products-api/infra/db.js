const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../products-api/infra/database.sqlite",
});

module.exports = sequelize;
