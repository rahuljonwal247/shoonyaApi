/**
 * db.js
 * @description :: exports values used to make connection with SQL database
 */

if (process.env.NODE_ENV !== "test") {
  module.exports = {
    HOST: process.env.HOST,
    USER: process.env.DATABASE_USERNAME,
    PASSWORD: process.env.DATABASE_PASSWORD,
    DB: process.env.DATABASE_NAME,
    dialect: "postgres",
    port: process.env.DB_PORT,
  };
} else {
  module.exports = {
    HOST: process.env.TEST_HOST,
    USER: process.env.TEST_DATABASE_USERNAME,
    PASSWORD: process.env.TEST_DATABASE_PASSWORD,
    DB: process.env.TEST_DATABASE_NAME,
    dialect: "postgres",
    port: process.env.TEST_DB_PORT,
  };
}
