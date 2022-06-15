const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Vote extends Model {}

Vote.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    vote: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // create_date: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   default: CURRENT_DATE,
    // },
    start_time: {
      type: DataTypes.TIME,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "vote",
  }
);

module.exports = Vote;
