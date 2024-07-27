/**
 * user.js
 * @description :: sequelize model of database table user
 */
const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConnection");
const sequelizePaginate = require("sequelize-paginate");
const sequelizeTransforms = require("sequelize-transforms");

let booking = sequelize.define(
  "booking",
  {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      retreat_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      retreat_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      retreat_location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      retreat_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      retreat_duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      payment_details: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      booking_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },

  
   
  },
  {
    freezeTableName: true,
   
  }
);

sequelizeTransforms(booking);
sequelizePaginate.paginate(booking);
module.exports = booking;