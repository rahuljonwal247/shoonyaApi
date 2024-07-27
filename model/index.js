/**
 * index.js
 * @description :: exports all the models and its relationships among other models
 */

const dbConnection = require("../config/dbConnection");
const db = {};
db.sequelize = dbConnection;
db.booking = require("./booking");
db.retreat = require("./retreat");

db.retreat.hasMany(db.booking, { foreignKey: 'retreat_id' });
db.booking.belongsTo(db.retreat, { foreignKey: 'retreat_id' });

module.exports = db;
