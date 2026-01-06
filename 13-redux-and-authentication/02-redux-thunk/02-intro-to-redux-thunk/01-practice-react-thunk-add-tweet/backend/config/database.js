const config = require("./index");

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: 5432,
    // storage: config.dbFile,
    dialect: "postgres",
    seederStorage: "sequelize",
    logQueryParameters: true,
    typeValidation: true,
  },
};
