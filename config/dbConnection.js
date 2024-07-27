/**
 * dbConnection.js
 * @description :: database connection using sequelize
 */

const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("./db");
const pg = require("pg");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  logging: false,
  dialectOptions: {
    // ssl: {
    //   require: false,
    //   rejectUnauthorized: false
    // },
    dialectModule: pg,
  },
});
module.exports = sequelize;
