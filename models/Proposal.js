const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Proposal extends Model {}

Proposal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    proposal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vote_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,  // <-- ** NEED TO REMOVE IF MORE THAN 1 VOTE IS NEEDED **
    },
    prop_votes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "proposal",
  }
);

module.exports = Proposal;
